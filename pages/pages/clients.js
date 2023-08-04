// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import {
    AllClients
} from 'sub-components';

const Clients = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllClients />
            </div>
        </Container>
    )
}

export default Clients;