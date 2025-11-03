import { Card, Row, Col, Container } from "react-bootstrap";
import { FaPiggyBank, FaHandHoldingUsd, FaChartLine, FaCashRegister, FaMobileAlt } from "react-icons/fa";


const Services = () => {
  const services = [
    {
      icon: <FaPiggyBank size={50} className="text-primary" />,
      title: "Savings and Deposits",
      text: "Secure your future with our high-interest savings and flexible deposit options.",
    },
    {
      icon: <FaHandHoldingUsd size={50} className="text-primary" />,
      title: "Micro Loans",
      text: "Get access to quick and affordable loans to grow your business.",
    },
    {
      icon: <FaChartLine size={50} className="text-primary" />,
      title: "Investment Plans",
      text: "Grow your wealth with our diverse range of investment plans.",
    },
    {
      icon: <FaCashRegister size={50} className="text-primary" />,
      title: "SwiftPay POS Solutions",
      text: "Efficiently manage your business transactions with our reliable and secure POS solutions.",
    },
    {
      icon: <FaMobileAlt size={50} className="text-primary" />,
      title: "Digital Banking",
      text: "Bank on the go with our user-friendly and secure digital banking platform.",
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="text-center h-100 shadow-sm border-0 service-card"
              >
                <Card.Body>
                  <div className="service-icon mb-3">{service.icon}</div>
                  <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;