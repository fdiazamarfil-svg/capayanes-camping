from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid


class ContactBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=8, max_length=20)
    service: str = Field(..., description="cabaña, camping, ambos, actividades")
    message: str = Field(..., min_length=10, max_length=1000)


class ContactCreate(ContactBase):
    pass


class ContactInDB(ContactBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="pending", description="pending, contacted, resolved")
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Juan Pérez",
                "email": "juan@example.com",
                "phone": "+549123456789",
                "service": "cabaña",
                "message": "Consulta sobre disponibilidad para el próximo fin de semana",
                "status": "pending"
            }
        }


class ContactResponse(ContactInDB):
    pass
