// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import {
    AllRequirement
} from 'sub-components';

const Requirement = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllRequirement />
            </div>
        </Container>
    )
}

export default Requirement;