import img1 from "../../../public/assets/images/freepik-security.jpg";
import img2 from "../../../public/assets/images/freepik-camera.jpg";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  // /add animation
  useGSAP(() => {
    gsap.to("#about-left", {
      opacity: 1,
      x: 0,
      duration: 3,
      scrollTrigger: "#about-left",
    });
    gsap.to("#about-right", {
      opacity: 1,
      x: 0,
      duration: 3,
      scrollTrigger: "#about-right",
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-[100vh] w-full  bg-primary_bg  px-4 py-10  pt-[60px] space-y-3 flex flex-col justify-center items-center"
    >
      {/* container */}
      <div>
        <h2 className="tracking-wide uppercase font-semibold italic text-center text-3xl mb-8 ">
          about us
        </h2>
        <div
          id="info1"
          className="space-y-3 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:gap-4 "
        >
          {/* left */}
          <div
            id="about-left"
            className="space-y-4 max-w-xl  opacity-0 -translate-x-[100%]"
          >
            <p className=" tracking-wide h1"> SECURITY AND INVESTIGATIONS</p>
            <p className=" italic lg:text-lg"> CORPORATE & PRIVATE</p>
            <p className="text-sm italic lg:text-lg">
              Security is something we cannot live without in today’s world. As
              a result, companies and (high-net-worth) individuals take their
              safety very seriously. With good reason. We therefore believe it
              is essential to find a reliable and experienced security and
              investigations company in the Netherlands.
            </p>
            <p className="text-sm italic lg:text-lg">
              Infinite Risks has an experienced management team with a solid
              network in the Netherlands and abroad. We know what threats are at
              play and how to deal with them adequately. Following a personal
              consultation, we analyze your risks and set up a safety plan to
              help you minimize these risks. Our security and investigative
              services are not merely services we provide. It is a passion we
              look forward to sharing with you. Our services unburden you of all
              your safety concerns, allowing you to direct your time and
              attention to your core business.
            </p>
          </div>

          {/* right */}
          <div
            id="about-right"
            className="max-w-lg space-y-3    opacity-0 translate-x-[100%]"
          >
            {/* img container */}
            <div className=" relative w-full h-[400px]">
              {/* first pic */}
              <img
                src={img2}
                alt=""
                className="w-[70%] h-[70%] absolute top-0 left-0 "
              />

              {/* 2ed pic */}
              <img
                src={img1}
                alt=""
                className="w-[60%] h-[60%] absolute right-0 bottom-0"
              />
            </div>

            {/* paragraph */}
            <p className="italic text-md tracking-wide lg:text-xl">
              {" "}
              Every project is different. That is why we deliver tailor-made
              security solutions for the corporate and private sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
