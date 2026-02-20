import requests
import json
import sys
from datetime import datetime

class CapayanesAPITester:
    def __init__(self):
        # Use the public endpoint from frontend/.env
        self.base_url = "https://capayanes-camping.preview.emergentagent.com"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, test_name, success, details="", response_data=None):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {test_name} - PASSED")
        else:
            print(f"❌ {test_name} - FAILED: {details}")
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "details": details,
            "response": response_data
        })
        return success

    def test_api_health(self):
        """Test basic API connectivity"""
        try:
            response = requests.get(f"{self.base_url}/api/", timeout=10)
            success = response.status_code == 200
            return self.log_test(
                "API Health Check",
                success,
                f"Status: {response.status_code}" if not success else "",
                response.json() if success else None
            )
        except Exception as e:
            return self.log_test("API Health Check", False, f"Connection error: {str(e)}")

    def test_create_contact_valid(self):
        """Test creating a contact with valid data"""
        contact_data = {
            "name": "Test Usuario",
            "email": "test@ejemplo.com",
            "phone": "+5493834050043",
            "service": "cabaña",
            "message": "Esta es una consulta de prueba para verificar el funcionamiento del formulario de contacto."
        }

        try:
            response = requests.post(
                f"{self.base_url}/api/contact/",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            success = response.status_code == 201
            response_data = response.json() if success else None
            
            details = ""
            if not success:
                details = f"Status: {response.status_code}, Response: {response.text[:200]}"
            elif response_data:
                # Verify response contains expected fields
                required_fields = ["id", "name", "email", "phone", "service", "message", "created_at", "status"]
                missing_fields = [field for field in required_fields if field not in response_data]
                if missing_fields:
                    success = False
                    details = f"Missing fields in response: {missing_fields}"
                elif response_data.get("status") != "pending":
                    success = False
                    details = f"Expected status 'pending', got '{response_data.get('status')}'"

            return self.log_test("Create Contact - Valid Data", success, details, response_data)
            
        except Exception as e:
            return self.log_test("Create Contact - Valid Data", False, f"Request error: {str(e)}")

    def test_create_contact_invalid_email(self):
        """Test creating contact with invalid email"""
        contact_data = {
            "name": "Test Usuario",
            "email": "email-invalido",
            "phone": "+5493834050043",
            "service": "camping",
            "message": "Consulta con email inválido"
        }

        try:
            response = requests.post(
                f"{self.base_url}/api/contact/",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should fail with 422 (validation error)
            success = response.status_code == 422
            details = f"Status: {response.status_code}" if not success else ""
            
            return self.log_test("Create Contact - Invalid Email", success, details)
            
        except Exception as e:
            return self.log_test("Create Contact - Invalid Email", False, f"Request error: {str(e)}")

    def test_create_contact_missing_fields(self):
        """Test creating contact with missing required fields"""
        contact_data = {
            "name": "Test Usuario",
            "email": "test@ejemplo.com"
            # Missing phone, service, and message
        }

        try:
            response = requests.post(
                f"{self.base_url}/api/contact/",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should fail with 422 (validation error)
            success = response.status_code == 422
            details = f"Status: {response.status_code}" if not success else ""
            
            return self.log_test("Create Contact - Missing Fields", success, details)
            
        except Exception as e:
            return self.log_test("Create Contact - Missing Fields", False, f"Request error: {str(e)}")

    def test_get_contacts(self):
        """Test retrieving contacts"""
        try:
            response = requests.get(f"{self.base_url}/api/contact/", timeout=10)
            success = response.status_code == 200
            response_data = response.json() if success else None
            
            details = ""
            if not success:
                details = f"Status: {response.status_code}, Response: {response.text[:200]}"
            elif response_data is not None and not isinstance(response_data, list):
                success = False
                details = "Response should be a list"

            return self.log_test("Get Contacts", success, details, response_data)
            
        except Exception as e:
            return self.log_test("Get Contacts", False, f"Request error: {str(e)}")

    def test_get_contacts_with_filter(self):
        """Test retrieving contacts with status filter"""
        try:
            response = requests.get(
                f"{self.base_url}/api/contact/?status_filter=pending&limit=5",
                timeout=10
            )
            success = response.status_code == 200
            response_data = response.json() if success else None
            
            details = ""
            if not success:
                details = f"Status: {response.status_code}"
            elif response_data is not None and not isinstance(response_data, list):
                success = False
                details = "Response should be a list"

            return self.log_test("Get Contacts - With Filter", success, details)
            
        except Exception as e:
            return self.log_test("Get Contacts - With Filter", False, f"Request error: {str(e)}")

    def test_different_services(self):
        """Test creating contacts with different service types"""
        services = ["cabaña", "camping", "ambos", "actividades"]
        all_success = True
        
        for service in services:
            contact_data = {
                "name": f"Test {service.title()}",
                "email": f"test.{service}@ejemplo.com",
                "phone": "+5493834050043",
                "service": service,
                "message": f"Consulta de prueba para el servicio de {service}"
            }

            try:
                response = requests.post(
                    f"{self.base_url}/api/contact/",
                    json=contact_data,
                    headers={"Content-Type": "application/json"},
                    timeout=10
                )
                
                if response.status_code != 201:
                    all_success = False
                    print(f"  ❌ Service '{service}' failed: {response.status_code}")
                else:
                    print(f"  ✅ Service '{service}' success")
                    
            except Exception as e:
                all_success = False
                print(f"  ❌ Service '{service}' error: {str(e)}")

        return self.log_test("Create Contact - All Service Types", all_success)

    def run_all_tests(self):
        """Run all backend tests"""
        print(f"\n🚀 Starting Cabaña Los Capayanes Backend API Tests")
        print(f"📍 Testing endpoint: {self.base_url}")
        print("=" * 60)

        # Test basic connectivity first
        if not self.test_api_health():
            print("\n❌ API is not accessible. Stopping tests.")
            return False

        # Run all tests
        self.test_create_contact_valid()
        self.test_create_contact_invalid_email()
        self.test_create_contact_missing_fields()
        self.test_get_contacts()
        self.test_get_contacts_with_filter()
        self.test_different_services()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} tests passed")
        success_rate = (self.tests_passed / self.tests_run) * 100 if self.tests_run > 0 else 0
        print(f"📈 Success Rate: {success_rate:.1f}%")

        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed! Backend API is working correctly.")
            return True
        else:
            failed_tests = [r for r in self.test_results if not r["success"]]
            print(f"\n⚠️  Failed Tests:")
            for test in failed_tests:
                print(f"   - {test['test']}: {test['details']}")
            return False

def main():
    tester = CapayanesAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())