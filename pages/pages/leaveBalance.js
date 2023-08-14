import { Container } from 'react-bootstrap';
import { AllLeaveBalance } from 'sub-components';

const LeaveBalance = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllLeaveBalance />
        </Container>
    )
}

export default LeaveBalance;