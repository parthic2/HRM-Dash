import { useState } from 'react';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

const UpdateDetail = () => {
  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCNewPassword, setShowCNewPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Row>
      <Col xl={9} lg={12} md={12} xs={12}>
        <Card id="edit">
          <Card.Body>
            <div className="mb-6 mt-6">
              <h4 className="mb-1">Change your password</h4>
            </div>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="currentPassword">Current password</Form.Label>
                <Col md={8} xs={12}>
                  <div className="position-relative">
                    <Form.Control
                      type={showCurrPassword ? "text" : "password"}
                      placeholder="Enter Current password" id="currentPassword"
                      required
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y"
                      style={{ right: "10px", cursor: "pointer" }}
                      onClick={() => setShowCurrPassword(!showCurrPassword)}
                    >
                      {showCurrPassword ? <i className="fe fe-eye-off me-2" /> : <i className="fe fe-eye me-2" />}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newPassword">New password</Form.Label>
                <Col md={8} xs={12}>
                  <div className="position-relative">
                    <Form.Control
                      type={showNewPassword ? "text" : "password"} placeholder="Enter New password" id="newPassword"
                      required
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y"
                      style={{ right: "10px", cursor: "pointer" }}
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <i className="fe fe-eye-off me-2" /> : <i className="fe fe-eye me-2" />}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Form.Label className="col-sm-4" htmlFor="confirmNewPassword">Confirm new password</Form.Label>
                <Col md={8} xs={12}>
                  <div className="position-relative">
                    <Form.Control
                      type={showCNewPassword ? "text" : "password"} placeholder="Confirm new password" id="confirmNewPassword"
                      required
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y"
                      style={{ right: "10px", cursor: "pointer" }}
                      onClick={() => setShowCNewPassword(!showCNewPassword)}
                    >
                      {showCNewPassword ? <i className="fe fe-eye-off me-2" /> : <i className="fe fe-eye me-2" />}
                    </div>
                  </div>
                </Col>
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                  <h6 className="mb-1">Password requirements:</h6>
                  <p>Ensure that these requirements are met:</p>
                  <ul>
                    <li>Minimum 8 characters long the more, the better</li>
                    <li>At least one lowercase character</li>
                    <li>At least one uppercase character</li>
                    <li>At least one number, symbol, or whitespace character</li>
                  </ul>
                  <Button variant="primary" type="submit">
                    Save New Password
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default UpdateDetail;