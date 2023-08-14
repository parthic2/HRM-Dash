import { Container } from 'react-bootstrap';
import { AllEmployee } from 'sub-components';

const Employee = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllEmployee />
        </Container>
    )
}

export default Employee;