import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <h2 className="text-center mb-4 display-4 fw-bold text-primary">About Swift Trust MFB</h2>
            <p className="lead text-center mb-5 text-secondary">
              Your trusted partner in financial growth and community development.
            </p>

            <h3 className="text-primary mb-3">Our History</h3>
            <p className="text-secondary">
              SwiftTrust MFB was established to close Nigeria’s financial access gap by creating a trusted platform for individuals, businesses, and underserved communities to access affordable and reliable banking services. Over the years, we have expanded our product portfolio, developed digital channels for faster and safer transactions, and built a strong governance structure that ensures compliance and customer trust.
            </p>

            <h3 className="text-primary mb-3 mt-5">Vision & Mission</h3>
            <h4 className="text-primary mb-2">Vision:</h4>
            <p className="text-secondary">
              Providing inclusive financial support services aimed at bringing value addition and creating a value chain of growth across Micro, Small, and Medium Enterprises (MSMEs).
            </p>
            <h4 className="text-primary mb-2">Mission:</h4>
            <p className="text-secondary">
              To alleviate poverty by providing financial and technical support to individuals, corporate entities, microfinance institutions, and all Nigerians in need of financial empowerment.
            </p>

            <h3 className="text-primary mb-3 mt-5">Our Core Services</h3>
            <ul className="list-unstyled text-secondary">
              <li><strong>-Loans & Credit Facilities:</strong> Consumer loans, SME loans, business support loans, and flexible repayment packages.</li>
              <li><strong>-Deposit & Savings:</strong> Individual/group savings accounts, corporate deposits, and fixed deposit products with competitive interest rates.</li>
              <li><strong>-Funds Transfer & Payments:</strong> Intra/inter-bank transfers, airtime, electricity, data, and other digital solutions.</li>
              <li><strong>-Financial Advisory:</strong> Support, education, and product guidance for individuals and businesses.</li>
            </ul>

            <h3 className="text-primary mb-3 mt-5">Our Values & Code of Conduct</h3>
            <p className="text-secondary">
              At SwiftTrust, we recognize that our strength lies in both our services and the values guiding how we serve. Our culture is shaped by professionalism, teamwork, innovation, and integrity.
            </p>
            <ul className="list-unstyled text-secondary">
              <li><strong>-Customer-Centricity:</strong> We place customer needs, expectations, and satisfaction at the center of everything.</li>
              <li><strong>-Innovation-Driven:</strong> We embrace creativity and new technologies responsibly to improve financial solutions.</li>
              <li><strong>-Teamwork & Collaboration:</strong> Together, we achieve more — encouraging inclusivity and mutual respect.</li>
              <li><strong>-Continuous Learning:</strong> We invest in staff growth through training, mentoring, and knowledge sharing.</li>
              <li><strong>-Compliance & Ethics:</strong> We comply with all laws, uphold ethical behavior, and promote accountability.</li>
            </ul>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;