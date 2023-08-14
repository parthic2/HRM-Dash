import { Container } from 'react-bootstrap';
import { TodayAttendance } from 'sub-components';

const TodayAttendances = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <TodayAttendance />
        </Container>
    )
}

export default TodayAttendances;