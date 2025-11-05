import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const InternetBanking = () => {
  return (
    <div className="internet-banking-page vh-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={6} className="d-flex align-items-center justify-content-center bg-light-green">
            <Card className="p-5 shadow-lg border-0 text-center" style={{minWidth: "450px"}}>
              <img src={assets.logo} alt="Swift Trust MFB Logo" className="mb-4 mx-auto" style={{ maxWidth: '155px' }} />
              <h2 className="mb-4 text-primary fw-bold">Internet Banking Login</h2>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" className="form-control-lg" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" className="form-control-lg" />
                </Form.Group>
                <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember for 30 days" className="text-secondary" />
                  <Link to="#forgot-password" className="text-primary small">Forgot Password?</Link>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary w-100 mb-3 btn-lg">
                  Login
                </Button>
                <p className="text-center text-secondary small lead">
                  Don't have an account? <Link to="#set-up-internet-banking" className="text-primary">Set Up Internet Banking</Link>
                </p>
              </Form>
            </Card>
          </Col>
          <Col md={6} className="p-0">
            <img src={assets.banking} alt="Internet Banking" className="w-100" style={{ objectFit: 'cover' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InternetBanking;