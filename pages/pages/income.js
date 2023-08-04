// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import {
    AllIncome
} from 'sub-components';

const Income = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllIncome />
            </div>
        </Container>
    )
}

export default Income;