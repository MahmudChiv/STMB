import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Promotion from "./components/Promotion";
import Community from "./components/Community";
import News from "./components/News";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Promotion />
      <Community />
      <News />
      <Contact />
    </>
  );
};

export default App;
