// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllEmployeeSalary } from 'sub-components';

const EmployeeSalary = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllEmployeeSalary />
            </div>
        </Container>
    )
}

export default EmployeeSalary;