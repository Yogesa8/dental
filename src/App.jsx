import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ReactLenis from "lenis/react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Services from "./pages/services/Services";

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
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
