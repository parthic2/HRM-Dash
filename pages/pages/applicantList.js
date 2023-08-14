import { Container } from 'react-bootstrap';
import { AllApplicantList } from 'sub-components';

const ApplicantList = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllApplicantList />
        </Container>
    )
}

export default ApplicantList;