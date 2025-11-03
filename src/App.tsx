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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/internet-banking" element={<InternetBanking />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AnimatedSection><Services /></AnimatedSection>
            <AnimatedSection><Business /></AnimatedSection>
            <AnimatedSection><Features /></AnimatedSection>
            <AnimatedSection><Promotion /></AnimatedSection>
            <AnimatedSection><Community /></AnimatedSection>
            <AnimatedSection><News /></AnimatedSection>
            <AnimatedSection><Contact /></AnimatedSection>
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;