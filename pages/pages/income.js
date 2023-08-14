import { Container } from 'react-bootstrap';
import { AllIncome } from 'sub-components';

const Income = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <AllIncome />
        </Container>
    )
}

export default Income;