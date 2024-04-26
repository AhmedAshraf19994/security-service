import { useEffect, useRef } from "react";
import About from "../../Components/About/About";
import CopyRights from "../../Components/CopyRights/CopyRights";
import Customization from "../../Components/Customization/Customization";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Components/Services/Services";
import Hero from "../../Components/Hero/Hero";
import ScrollButton from "../../Components/ScrollButton/ScrollButton";
import Testomnials from "../../Components/Testomenials/Testomnials";
import CookieBanner from "../../Components/CookieBanner/CookieBanner";
import SecondServices from "../../Components/SecondServices/SecondServices";

const Home = () => {
  const start = useRef();
  useEffect(() => {
    start.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <main className="bg-primary_bg w-[100dvw]">
      <div ref={start}></div>

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* about us */}
      <About />

      {/* services */}
      <Services />

      {/* SECOND SERVICES  */}

      <SecondServices />

      {/* testimonials */}

      <Testomnials />

      {/* customization */}
      <Customization />

      {/* footer */}
      <Footer />

      {/* copyrights */}
      <CopyRights />

      {/* scroll button */}
      <ScrollButton />

      {/* cookie banner */}
      <CookieBanner />
    </main>
  );
};

export default Home;
