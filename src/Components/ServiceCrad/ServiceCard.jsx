import { useGSAP } from "@gsap/react";
import img from "../../../public/assets/images/freepik-camera.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

/* eslint-disable react/prop-types */

const ServiceCard = ({ title, src, text }) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#service-info", {
      opacity: 1,
      scale: 1,
      duration: 3,
      scrollTrigger: "#service-info",
    });
  }, []);
  return (
    <div className="uppercase w-full  flex flex-col gap-4  cursor-pointer  bg-gray-800 hover:cursor-pointer pb-4 ">
      <div className="overflow-hidden ">
        <img
          src={src ? src : img}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="space-y-3 flex flex-col pl-5 scale-0 opacity-0"
        id="service-info"
      >
        <p className=" text-left italic tracking-wide hover:underline uppercase text-center ">
          {title}
        </p>
        <p className=" text-xs md:text-sm opacity-80 px-2 italic">{text}</p>
        {/* <button className='bg-gray-600 px-4 py-2 rounded-lg w-fit text-sm mb-3'>READ MORE</button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
