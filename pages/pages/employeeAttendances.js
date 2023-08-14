import { Container } from 'react-bootstrap';
import { EmployeeAttendance } from 'sub-components';

const EmployeeAttendances = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <EmployeeAttendance />
        </Container>
    )
}

export default EmployeeAttendances;