import About from "./About/About"
import Registration from "./navbar/Navbar"
import { Col, Container, Row } from "react-bootstrap";
function LogAndAbout() {
  return (
    <section className="container center">
      <Container className="mb-5">
      <Row>
        <Col md={6}>
          <Registration />
        </Col>
        <Col md={6}>
          <div className="mb-5">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis, lorem ut lobortis dapibus, mauris libero finibus mi, nec
              efficitur nisi mi non est.
            </p>
            <h2>Terms of Service</h2>
            <p>
              Phasellus aliquet lorem ut ipsum euismod, nec volutpat mauris
              convallis. Proin lobortis, sapien sed auctor tempus, mauris nisi
              malesuada metus, vel interdum odio mauris nec dolor.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    {/* <div className="oops">
      <div>
     <Registration/>
      </div>
      <div>
       <About/>
      </div>
    </div> */}
    
    </section>
  )
}

export default LogAndAbout
