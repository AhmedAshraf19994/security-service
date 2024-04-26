import { useGSAP } from "@gsap/react";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".heading", {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "sine.in",
      scrollTrigger: ".heading",
    });
  }, []);
  return (
    <section className=" py-20 mt-10  bg-[]  w-full" id="services">
      {/* container */}
      <div className=" flex flex-col items-center space-y-5" id="trailer">
        {/* heading */}

        {/* 2ed heading */}
        <p className="tracking-wider sm:text-3xl uppercase heading translate-y-[100%] opacity-0">
          {" "}
          OUR SERVICES{" "}
        </p>

        {/* slider Container */}

        <div className="slider-container max-w-[1000px] w-full  ">
          {/* <CardsSlider/> */}
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};

export default Services;
