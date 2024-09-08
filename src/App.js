import React, { useEffect } from "react";
import HeaderAndHome from "./HeaderAndHome/HeaderAndHome";
import About from "./About/About";
import Charity from "./Charity/Charity";
import Community from "./Community/Community";
import Footer from "./Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <HeaderAndHome />
      <About />
      <Charity />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
