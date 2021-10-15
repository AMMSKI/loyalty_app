import React from 'react'
import { useHistory } from 'react-router';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap'
import '../StyleSheets/Landing.css'


const Landing = () => {
  const history = useHistory()

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel variant="dark">
              <Carousel.Item className="carousel.item">
                <img
                  className="d-block w-100"
                  src="/landing1.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/landing1.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/landing1.jpeg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="buttons.group">
          <Col>
            <br />
            <h5 className="d-flex justify-content-center"> Sign in to get started now!</h5>
            <br />
            <div className="d-flex justify-content-evenly">
              <Button size="lg" className="rounded-pill" variant="outline-primary" onClick={(e) => history.push('/login')}> SIGN IN </Button>
              <Button size="lg" className="rounded-pill" variant="outline-primary" onClick={(e) => history.push('/register')}> SIGN UP </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing;