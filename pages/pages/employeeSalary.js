import { Container } from 'react-bootstrap';
import { AllEmployeeSalary } from 'sub-components';

const EmployeeSalary = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
                <AllEmployeeSalary />
        </Container>
    )
}

export default EmployeeSalary;