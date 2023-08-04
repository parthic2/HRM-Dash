// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllDepartment } from 'sub-components';

const AllDepart = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllDepartment />
            </div>
        </Container>
    )
}

export default AllDepart;