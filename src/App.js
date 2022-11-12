import "./assets/css/style.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import React from "react";

function App() {
  React.useEffect(function () {
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
