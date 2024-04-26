import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import Form from "../Form/Form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Customization = () => {
  useGSAP(() => {
    gsap.to("#left", {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power1.in",
      scrollTrigger: "#left",
    });
    gsap.to("#contact-form", {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: "power1.in",
      scrollTrigger: "#contact-form",
    });
  }, []);
  return (
    <section id="customization" className="w-full bg-gray-800  p-6  pt-12">
      {/* container */}
      <div className="w-full  mx-auto  flex flex-col  lg:flex-row ">
        {/* left */}
        <div
          id="left"
          className="p-5 bg-primary_bg space-y-12 flex-1   max-w-xl   md:mx-auto opacity-0 -translate-x-[100%]"
        >
          <p className="italic uppercase text-[1.5rem] mb-2 ">customeization</p>
          <p className=" uppercase tracking-wider text-3xl  font-bold max-sm:text-[1rem] leading-4 ">
            why mah security
          </p>

          {/* items */}
          <div className=" space-y-8 ">
            <div className="flex justify-start items-center gap-3 ">
              <div>
                <LocalPhoneIcon fontSize="large" />
              </div>
              <div>
                <p className="font-semibold tracking-wide text-xl italic mb-3">
                  Short communication Lines
                </p>
                <p className="text-sm opacity-80 italic">
                  Quick and effective response to you requests
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <div>
                <WalletOutlinedIcon fontSize="large" />
              </div>
              <div>
                <p className="font-semibold tracking-wide text-xl italic mb-2 ">
                  Competitive rates
                </p>
                <p className="text-sm italic opacity-70">
                  Fair prices for high-end services
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <div>
                <LanguageOutlinedIcon fontSize="large" />
              </div>
              <div>
                <p className="font-semibold tracking-wide text-xl italic mb-2">
                  International field of operation
                </p>
                <p className="text-sm italic opacity-70"> We go where you go</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <div>
                <PeopleAltOutlinedIcon fontSize="large" />
              </div>
              <div>
                <p className="font-semibold tracking-wide text-xl italic mb-2">
                  Certified employees
                </p>
                <p className="text-sm italic opacity-70">
                  We employ certified specialists
                </p>
              </div>
            </div>
          </div>

          {/* single item */}
        </div>

        {/* right */}
        <div
          className="flex-1 lg:max-w-2xl  w-full mx-auto p-3 opacity-0 translate-x-[100%]"
          id="contact-form"
        >
          <Form title="CONTACT US" />
        </div>
      </div>
    </section>
  );
};

export default Customization;
