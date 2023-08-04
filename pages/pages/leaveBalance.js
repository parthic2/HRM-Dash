// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllLeaveBalance } from 'sub-components';

const LeaveBalance = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllLeaveBalance />
            </div>
        </Container>
    )
}

export default LeaveBalance;