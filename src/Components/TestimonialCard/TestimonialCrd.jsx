import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const TestimonialCrd = ({ review, name }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#test-card", {
      opacity: 1,
      scale: 1,
      duration: 3,
      scrollTrigger: "#test-card",
    });
  }, []);
  return (
    <div
      className=" flex-1 rounded-xl space-y-6 opacity-0 scale-0 p-4 flex flex-col items-center max-w-[500px] border-[2px] border-gold h-[400px]  cursor-pointer"
      id="test-card"
    >
      <div>
        {" "}
        <FormatQuoteIcon />{" "}
      </div>
      <p className="flex-1 hover:scale-90 transition-all duration-500 ease-in">
        {review}
      </p>
      <div className=" flex gap-5 ">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="https://img.freepik.com/free-photo/man-with-glasses-with-his-arms-crossed_1368-7500.jpg?w=360&t=st=1713737217~exp=1713737817~hmac=5145e34325899381b27d6d4fff3bce16e3bb77989178696b8196a3260d4c070e"
          alt=""
        />
        <div className=" text-lg italic"> {name} </div>
      </div>
    </div>
  );
};

export default TestimonialCrd;
