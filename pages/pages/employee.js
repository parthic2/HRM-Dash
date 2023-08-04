// import node module libraries
import { Container } from 'react-bootstrap';

// import sub components
import {
    AllEmployee
} from 'sub-components';

const Employee = () => {
    return (
        <Container fluid className="p-6">
            {/* content */}
            <div className="py-6">
                <AllEmployee />
            </div>
        </Container>
    )
}

export default Employee;