// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllLeaveType } from 'sub-components';

const LeaveType = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllLeaveType />
            </div>
        </Container>
    )
}

export default LeaveType;