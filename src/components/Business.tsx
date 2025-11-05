import { FaRegCreditCard, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";

const Business = () => {
  return (
    <section id="business" className="py-5">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={5} className="mb-4 mb-md-0">
            <h2 className="display-4 fw-bold mb-4">
              Empowering Your Business Growth
            </h2>
            <p className="lead mb-4">
              At Swift Trust MFB, we understand the unique needs of businesses.
              Our tailored financial solutions are designed to streamline your
              operations, boost your capital, and secure your future.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-start mb-4">
              <div className="p-3 rounded-circle me-3 bg-primary text-white">
                <FaRegCreditCard size={30} />
              </div>
              <div>
                <h5 className="fw-bold">Flexible Credit Solutions</h5>
                <p className="text-muted mb-0 lead">
                  your business cycle and expansion plans.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <div className="p-3 rounded-circle me-3 bg-primary text-white">
                <FaHandshake size={30} />
              </div>
              <div>
                <h5 className="fw-bold">Partnership & Support</h5>
                <p className="text-muted mb-0 lead">
                  Benefit from expert financial advice and dedicated support to
                  navigate market challenges and opportunities.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="p-3 rounded-circle me-3 bg-primary text-white">
                <FaShieldAlt size={30} />
              </div>
              <div>
                <h5 className="fw-bold">Secure & Efficient Transactions</h5>
                <p className="text-muted mb-0 lead">
                  Utilize our robust platforms for secure, fast, and reliable
                  business transactions and payments.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;