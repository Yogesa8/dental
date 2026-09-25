import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ReactLenis from "lenis/react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Services from "./pages/services/Services";
import Contact from "./components/shared/Contact";
import About from "./pages/about/About";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
        }}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
