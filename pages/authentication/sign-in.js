import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful sign-in by setting the user in localStorage
    const user = { id: 1, username: "testuser" };
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
            <Form onSubmit={handleSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Enter address here"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" id="rememberme">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
              </div>
              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-up" className="fs-5">
                      Create An Account{" "}
                    </Link>
                  </div>
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
