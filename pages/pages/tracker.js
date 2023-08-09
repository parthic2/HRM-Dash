// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import {
    Tracker
} from 'sub-components';

const EmpTracker = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <Tracker />
            </div>
        </Container>
    )
}

export default EmpTracker;