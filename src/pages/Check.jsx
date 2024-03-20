import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Check() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
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
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
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
      </Container>
    </div>
  );
}

export default Check;
