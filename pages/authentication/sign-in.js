import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // Default role is user

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful sign-in by setting the user and role in localStorage
    const user = { id: 1, username: "testuser", role: selectedRole };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect the user back to the returnUrl or a default route
    const returnUrl = router.query.returnUrl || '/';
    router.push(returnUrl);
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                {/* <Image
                  src="/images/brand/logo/logo-primary.svg"
                  className="mb-2"
                  alt=""
                /> */}
                <h1>HRM</h1>
              </Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            <Form onSubmit={handleSubmit} autoComplete="off">
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Enter address here"
                  // required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    // required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="position-absolute top-50 end-0 translate-middle-y"
                    style={{ right: "10px", cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <i className="fe fe-eye-off me-2" /> : <i className="fe fe-eye me-2" />}
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Role</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Admin"
                    name="role"
                    value="admin"
                    id="adminRole"
                    checked={selectedRole === "admin"}
                    onChange={() => setSelectedRole("admin")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="HR"
                    name="role"
                    value="hr"
                    id="hrRole"
                    checked={selectedRole === "hr"}
                    onChange={() => setSelectedRole("hr")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Employee"
                    name="role"
                    value="employee"
                    id="employeeRole"
                    checked={selectedRole === "employee"}
                    onChange={() => setSelectedRole("employee")}
                  />
                </div>
              </Form.Group>

              <div>
                {/* Button */}
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
