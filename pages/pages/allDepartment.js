import { Container } from 'react-bootstrap';
import { AllDepartment } from 'sub-components';

const AllDepart = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllDepartment />
        </Container>
    )
}

export default AllDepart;