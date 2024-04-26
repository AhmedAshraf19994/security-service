import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const HeroSlide = ({ img, direction }) => {
  const chars = new SplitType("#target", { type: "Chars" });
  useGSAP(() => {
    gsap.to("#info", {
      opacity: 1,
      scale: 1,
      duration: 2,
    });

    gsap.set(chars.chars, {
      y: 100,
    });
    gsap;
  }, []);

  return (
    <div className=" relative w-full h-[100dvh] bg-primary_Bg bg-gradient-to-r ">
      {/* img */}
      <img src={img} alt="img1" className="w-full h-full" />

      {/* info */}
      <div
        className={`absolute left-[10%]  top-[50%] bottom-[50%] my-auto z-[100] italic max-w-xl h-[5] px-2 opacity-0   scale-0`}
        id="info"
      >
        <div
          className="tracking-wider  leading-6 text-lg sm:text-2xl decoration-none mb-2p0 font-bold italic uppercase mb-5 chars"
          id="target"
        >
          Looking to Secure your business
        </div>

        <p className="italic tracking-wide text-2xl mb-2 font-semibold"></p>

        <p className="italic text-xl font-semibold mb-5">
          we ensure Your Business's Safety with a Comprehensive Security
          Assessment
        </p>

        <a
          href="#customization "
          className="border-2  border-gold uppercase italic mt-5 hover:opacity-70 py-2 px-4 font-semibold rounded-lg hover:translate-x-4"
        >
          {" "}
          contact us{" "}
          <span className="hidden ">
            {" "}
            <ChevronRightIcon />{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroSlide;
