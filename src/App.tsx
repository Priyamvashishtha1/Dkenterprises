import { About } from "./components/About";
//import { Cta } from "./components/Cta";
//import { FAQ } from "./components/FAQ";
import { Features } from "./components/Feature";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
//import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
//import { Newsletter } from "./components/Newsletter";
//import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
//mport { Services } from "./components/Services";
//import { Sponsors } from "./components/Sponsors";
//import { Team } from "./components/Team";
//import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
      <ScrollToTop />
    
    </>
  );
}

export default App;
