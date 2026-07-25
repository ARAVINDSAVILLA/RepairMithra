import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import HowItWorks from "../../components/home/HowItWorks";
import ComingSoon from "../../components/home/ComingSoon";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default Home;