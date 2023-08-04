// import node module libraries
import { Container } from 'react-bootstrap';
// import sub components
import { AllApplicantList } from 'sub-components';

const ApplicantList = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllApplicantList />
            </div>
        </Container>
    )
}

export default ApplicantList;