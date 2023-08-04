// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllProjects } from 'sub-components';

const Projects = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllProjects />
            </div>
        </Container>
    )
}

export default Projects;