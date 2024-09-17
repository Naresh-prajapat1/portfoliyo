import { Fragment } from "react";
import Button from "./components/button";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import AnimationBar from "./components/animationBar";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Certificate from "./components/certificate";
import Footer from "./components/footer";
function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <AnimationBar />
      <Services />
      <Portfolio />
      <Certificate />
      <Footer />
    </Fragment>
  );
}

export default App;
