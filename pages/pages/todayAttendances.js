// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import { TodayAttendance } from 'sub-components';

const TodayAttendances = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <TodayAttendance />
            </div>
        </Container>
    )
}

export default TodayAttendances;