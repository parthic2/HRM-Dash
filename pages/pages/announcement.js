import { Container } from 'react-bootstrap';
import { Announcement } from 'sub-components';

const Announcements = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <Announcement />
        </Container>
    )
}

export default Announcements;