import { Container } from 'react-bootstrap';
import { AllProjects } from 'sub-components';

const Projects = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllProjects />
        </Container>
    )
}

export default Projects;