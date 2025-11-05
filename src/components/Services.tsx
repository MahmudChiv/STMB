import { Card, Row, Col, Container } from "react-bootstrap";
import { FaPiggyBank, FaHandHoldingUsd, FaChartLine, FaCashRegister, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaPiggyBank size={50} className="text-primary" />,
    title: "Savings and Deposits",
    slug: "savings-and-deposits",
  },
  {
    icon: <FaHandHoldingUsd size={50} className="text-primary" />,
    title: "Micro Loans",
    slug: "micro-loans",
  },
  {
    icon: <FaChartLine size={50} className="text-primary" />,
    title: "Investment Plans",
    slug: "investment-plans",
  },
  {
    icon: <FaCashRegister size={50} className="text-primary" />,
    title: "SwiftPay POS Solutions",
    slug: "swiftpay-pos-solutions",
  },
  {
    icon: <FaMobileAlt size={50} className="text-primary" />,
    title: "Digital Banking",
    slug: "digital-banking",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Link to={`/services#${service.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="text-center h-100 shadow-sm border-0 service-card">
                  <Card.Body>
                    <div className="service-icon mb-3">{service.icon}</div>
                    <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;