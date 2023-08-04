// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import { EmployeeAttendance } from 'sub-components';

const EmployeeAttendances = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <EmployeeAttendance />
            </div>
        </Container>
    )
}

export default EmployeeAttendances;