import { Container } from 'react-bootstrap';
import { EditProfile } from 'sub-components';

const editProfile = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <EditProfile />
        </Container>
    )
}

export default editProfile;