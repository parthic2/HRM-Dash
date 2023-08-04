// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllLeaveReq } from 'sub-components';

const LeaveReq = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllLeaveReq />
            </div>
        </Container>
    )
}

export default LeaveReq;