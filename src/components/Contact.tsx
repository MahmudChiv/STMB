import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">Contact Us</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <h3 className="mb-4">Get in Touch</h3>
                <p className="lead">Have a question or a project in mind? We'd love to hear from you.</p>
                <p className="lead"><strong>Email:</strong> info@swiftrustmfb.com</p>
                <p className="lead"><strong>Phone:</strong> +234 123 456 7890</p>
              </Col>
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="contactFormName">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactFormEmail">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactFormMessage">
                    <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;