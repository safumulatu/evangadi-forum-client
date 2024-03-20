import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function TestPage() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          {/* Left column for registration */}
          <div className="p-4 bg-light">
            <h2>Join the network</h2>
            <p>
              Already have an account?{" "}
              <span style={{ color: "orange", cursor: "pointer" }}>Sign in</span>
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Agree and Join
              </Button>
            </Form>
            <p className="mt-3">
              I agree to the <a href="#">privacy policy</a> and{" "}
              <a href="#">terms of service</a>.
            </p>
          </div>
        </Col>

        <Col md={6}>
          {/* Right column for information */}
          <div className="p-4">
            <h2>About</h2>
            <p>Evangadi Networks Q&A</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              voluptate officiis beatae nobis pariatur omnis facere accusamus
              laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
              quisquam! Molestias, ut commodi!
            </p>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.!
            </p>
            <p>
              Whether you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network <Button variant="link">how it works</Button>.
            </p>
          </div>
        </Col>
      </Row>
      <div>
      <Container>
      <Row>
        <Col md={6}>
          {/* Sign-in form */}
          <div className="p-4 bg-light">
            <h2>Login to your account</h2>
            <p>
              Don't have an account?{" "}
              <span style={{ color: "orange", cursor: "pointer" }}>
                Create a new account
              </span>
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p className="mt-3">
              Create an account?{" "}
              <span style={{ color: "orange", cursor: "pointer" }}>
                Create a new account
              </span>
            </p>
          </div>
        </Col>

        <Col md={6}>
          {/* Information section */}
          <div className="p-4">
            <h2>About</h2>
            <p>Evangadi Networks Q&A</p>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.!
            </p>
            <p>
              Whether you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network{" "}
              <Button variant="link" style={{ color: "orange" }}>
                here
              </Button>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
      </div>
    </Container>
  );
}

export default TestPage;
