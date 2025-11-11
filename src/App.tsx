import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Promotion from "./components/Promotion";
import Community from "./components/Community";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Business from "./components/Business";
import AnimatedSection from "./components/AnimatedSection";
import AboutUs from "./components/AboutUs";
import InternetBanking from "./components/InternetBanking"
import Features from "./components/Features";
import ServicesPage from "./components/ServicesPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/internet-banking" element={<InternetBanking />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

import ScrollToTopButton from "./components/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <AnimatedSection><Hero /></AnimatedSection>
            <AnimatedSection className="bg-white"><Services /></AnimatedSection>
            <AnimatedSection><Business /></AnimatedSection>
            <AnimatedSection className="bg-white"><Features /></AnimatedSection>
            <AnimatedSection><Promotion /></AnimatedSection>
            <AnimatedSection className="bg-white"><Community /></AnimatedSection>
            <AnimatedSection><News /></AnimatedSection>
            <AnimatedSection className="bg-white"><Contact /></AnimatedSection>
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App;