import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPiggyBank, FaHandHoldingUsd, FaChartLine, FaCashRegister, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaPiggyBank size={50} className="text-primary" />,
    title: "Savings and Deposits",
    slug: "savings-and-deposits",
    text: "Secure your future with our high-interest savings and flexible deposit options. We offer a variety of accounts to suit your needs, including regular savings, fixed deposits, and target savings. Our competitive interest rates ensure your money grows steadily over time.",
  },
  {
    icon: <FaHandHoldingUsd size={50} className="text-primary" />,
    title: "Micro Loans",
    slug: "micro-loans",
    text: "Get access to quick and affordable loans to grow your business. Whether you need capital for expansion, inventory, or equipment, our micro loans offer flexible repayment terms and competitive interest rates. We are committed to supporting small and medium-sized enterprises.",
  },
  {
    icon: <FaChartLine size={50} className="text-primary" />,
    title: "Investment Plans",
    slug: "investment-plans",
    text: "Grow your wealth with our diverse range of investment plans. From low-risk to high-yield options, our financial experts will help you choose the best plan to achieve your financial goals. We offer mutual funds, bonds, and other investment products.",
  },
  {
    icon: <FaCashRegister size={50} className="text-primary" />,
    title: "SwiftPay POS Solutions",
    slug: "swiftpay-pos-solutions",
    text: "Efficiently manage your business transactions with our reliable and secure POS solutions. Our POS terminals are easy to use and come with 24/7 support. We offer competitive transaction rates and fast settlement to help your business thrive.",
  },
  {
    icon: <FaMobileAlt size={50} className="text-primary" />,
    title: "Digital Banking",
    slug: "digital-banking",
    text: "Bank on the go with our user-friendly and secure digital banking platform. Check your balance, transfer funds, pay bills, and more, all from your mobile device. Our app is available on both Android and iOS, providing you with banking at your fingertips.",
  },
];

const ServicesPage = () => {
  return (
    <section id="services-page" className="py-5">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold">Our Services</h1>
        <Row>
          {services.map((service, index) => (
            <Col md={12} key={index} className="mb-4" id={service.slug}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2} className="text-center">
                      <div className="service-icon mb-3">{service.icon}</div>
                    </Col>
                    <Col md={10}>
                      <Card.Title className="h3 mb-3">{service.title}</Card.Title>
                      <Card.Text className="lead">{service.text}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesPage;
