import React from "react";
import img from "../../../public/assets/images/img1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const SecondServiceCard = ({ image, index, title, text }) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#service2-img", {
      opacity: 1,
      x: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#service2-img",
      },
      stagger: 1,
    });
    gsap.to("#service2-info", {
      opacity: 1,
      x: 0,
      duration: 3,
      scrollTrigger: {
        trigger: "#service2-info",
      },
    });
  }, []);

  const odd = index % 2 != 0;
  return (
    <div
      className={`w-full flex flex-col ${
        odd ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-5 items-center `}
    >
      {/* image */}
      <div className="flex-1  hover:scale-105 transition-all duration-300 ease-in">
        {/* image  */}
        <img
          src={image}
          alt="img"
          className={`${
            odd ? "-translate-x-[100%]" : "translate-x-[100%]"
          } opacity-0 w-full h- full rounded-xl  cursor-pointer`}
          id="service2-img"
        />
      </div>

      {/* text */}
      <div
        className={`flex-1 italic opacity-0 ${
          odd ? "translate-x-[100%]" : "-translate-x-[100%]"
        }`}
        id="service2-info"
      >
        <h3 className="text-2xl my-5">{title}</h3>
        <p className="text-lg opacity-70">{text}</p>
      </div>
    </div>
  );
};

export default SecondServiceCard;
