import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const InternetBanking = () => {
  return (
    <div className="internet-banking-page d-flex align-items-center justify-content-center vh-100 bg-light-green">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="p-4 shadow-lg border-0 text-center internet-banking-card">
              <img src={assets.logo} alt="Swift Trust MFB Logo" className="mb-4 mx-auto" style={{ maxWidth: '155px' }} />
              <h3 className="mb-4 text-primary fw-bold">Internet Banking Login</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" className="form-control-custom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" className="form-control-custom" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember for 30 days" className="text-secondary" />
                  <Link to="#forgot-password" className="text-primary small">Forgot Password?</Link>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary w-100 mb-3 btn-lg">
                  Login
                </Button>
                <p className="text-center text-secondary small">
                  Don't have an account? <Link to="#set-up-internet-banking" className="text-primary">Set Up Internet Banking</Link>
                </p>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InternetBanking;