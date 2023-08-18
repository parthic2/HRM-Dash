import { Container } from 'react-bootstrap';
import { Award } from 'sub-components';

const Awards = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <Award />
        </Container>
    )
}

export default Awards;