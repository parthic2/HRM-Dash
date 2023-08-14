import { Container } from 'react-bootstrap';
import { AllClients } from 'sub-components';

const Clients = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllClients />
        </Container>
    )
}

export default Clients;