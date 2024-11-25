import React from "react";
import Header from "./Component/Header";
import About from "./About";
import Projects from "./Component/Projects";
import Testimonial from "./Component/Testimonial";
import Contact from "./Component/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/Footer";
import Name from "./Component/name";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Name />
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
