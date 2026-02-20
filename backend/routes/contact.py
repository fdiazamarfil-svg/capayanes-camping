from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from models.contact import ContactCreate, ContactResponse, ContactInDB
from typing import List
import logging
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'capayanes_db')]
contacts_collection = db.contacts


@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def create_contact(contact: ContactCreate):
    """
    Crea una nueva consulta de contacto
    
    - **name**: Nombre completo del cliente
    - **email**: Email del cliente
    - **phone**: Teléfono del cliente
    - **service**: Servicio de interés (cabaña, camping, ambos, actividades)
    - **message**: Mensaje o consulta del cliente
    """
    try:
        # Crear objeto de contacto con metadata
        contact_in_db = ContactInDB(**contact.dict())
        contact_dict = contact_in_db.dict()
        
        # Guardar en MongoDB
        result = await contacts_collection.insert_one(contact_dict)
        
        if not result.inserted_id:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error al guardar la consulta"
            )
        
        logger.info(f"Nueva consulta guardada: {contact_in_db.id} - {contact_in_db.email}")
        
        return ContactResponse(**contact_dict)
        
    except Exception as e:
        logger.error(f"Error al crear consulta: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al procesar la consulta: {str(e)}"
        )


@router.get("/", response_model=List[ContactResponse])
async def get_contacts(
    status_filter: str = None,
    limit: int = 100,
    skip: int = 0
):
    """
    Obtiene todas las consultas de contacto
    
    - **status_filter**: Filtrar por estado (pending, contacted, resolved)
    - **limit**: Número máximo de resultados
    - **skip**: Número de resultados a saltar (paginación)
    """
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        cursor = contacts_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
        contacts = await cursor.to_list(length=limit)
        
        return [ContactResponse(**contact) for contact in contacts]
        
    except Exception as e:
        logger.error(f"Error al obtener consultas: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al obtener consultas: {str(e)}"
        )


@router.get("/{contact_id}", response_model=ContactResponse)
async def get_contact(contact_id: str):
    """
    Obtiene una consulta específica por ID
    """
    try:
        contact = await contacts_collection.find_one({"id": contact_id})
        
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Consulta no encontrada"
            )
        
        return ContactResponse(**contact)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al obtener consulta: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al obtener consulta: {str(e)}"
        )


@router.patch("/{contact_id}/status")
async def update_contact_status(contact_id: str, new_status: str):
    """
    Actualiza el estado de una consulta
    
    - **new_status**: pending, contacted, resolved
    """
    try:
        if new_status not in ["pending", "contacted", "resolved"]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Estado inválido. Use: pending, contacted, resolved"
            )
        
        result = await contacts_collection.update_one(
            {"id": contact_id},
            {"$set": {"status": new_status}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Consulta no encontrada"
            )
        
        return {"message": "Estado actualizado correctamente", "new_status": new_status}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error al actualizar estado: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al actualizar estado: {str(e)}"
        )
