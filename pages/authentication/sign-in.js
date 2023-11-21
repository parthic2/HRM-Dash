import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import useAuth from "./useAuth";

const SignIn = () => {
  const router = useRouter();
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    selectedRole,
    setSelectedRole,
    handleLogin,
    toggleShowPassword,
  } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(router);
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Card className="smooth-shadow-md">
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <h1>HRM</h1>
              </Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Enter address here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="position-absolute top-50 end-0 translate-middle-y"
                    style={{ right: '10px', cursor: 'pointer' }}
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <i className="fe fe-eye-off me-2" />
                    ) : (
                      <i className="fe fe-eye me-2" />
                    )}
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Role</Form.Label>
                <div>
                  {['admin', 'hr', 'employee'].map((role) => (
                    <Form.Check
                      key={role}
                      inline
                      type="radio"
                      label={role.charAt(0).toUpperCase() + role.slice(1)}
                      name="role"
                      value={role}
                      id={`${role}Role`}
                      checked={selectedRole === role}
                      onChange={() => setSelectedRole(role)}
                    />
                  ))}
                </div>
              </Form.Group>

              <div>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;