import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./style.css";
import Form from "../../Components/Form/Form";
import CopyRights from "../../Components/CopyRights/CopyRights";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Contact = () => {
  const startRef = useRef();
  useEffect(() => {
    startRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  useGSAP(() => {
    gsap.to("#form", {
      opacity: 1,
      x: 0,
      duration: 4,
      y: 0,
    });
    gsap.to("#left", {
      opacity: 1,
      x: 0,
      duration: 3,
      y: 0,
    });
  }, []);
  return (
    <main className="w-[100dvw] bg-primary_bg py-20" id="contact">
      <div ref={startRef}></div>
      {/* Navbar */}
      <Navbar />

      {/* container */}
      <div className=" p-10 flex flex-col gap-4 mb-10 md:flex-row max-w-[1200px] mx-auto md:mb-0 min-h-[100vh] items-center">
        {/* left */}
        <div
          className="flex flex-col gap-7 p-3 italic sm:text-center md:flex-1 opacity-0 translate-x-[-100%]"
          id="left"
        >
          <div>
            <h2 className="tracking-wide italic text-xl mb-4 font-semibold">
              DISCREET AND CONFIDENTIAL
            </h2>
            <p className="opacity-70">
              Most of our operations are highly sensitive and confidential. MAH
              Security takes extreme preventing measures to ensure that
              (operational) information from potential clients are protected.
            </p>
            <p className="opacity-70">
              A Costumer Due Diligence Check (CDDC) is conducted before any
              services are offered.
            </p>
            <p className="opacity-70">
              All initial consultations are both FREE and completely
              confidential.
            </p>
          </div>

          <div>
            <h2 className="tracking-wide italic text-xl mb-4 font-semibold">
              {" "}
              looking for a job{" "}
            </h2>
            <p className="opacity-70">
              Send your resume and motivation letter to{" "}
              <a href="" className="opacity-100 text-white underline">
                HR@MAHsecurity.nl
              </a>
            </p>
          </div>

          <div>
            <h2 className="tracking-wider italic text-xl mb-4 font-semibold text-2xl">
              {" "}
              contact{" "}
            </h2>
            <p className="opacity-70">MAH security</p>
            <p className="opacity-70"> Keizersgracht 62 </p>
            <p className="opacity-70"> 1015CS munich</p>
            <p className="opacity-70"> germany </p>
            <div className=" flex gap-7 sm:justify-center">
              <span> Tel:</span>
              <a href="">+215412521521</a>
            </div>
            <div className="flex gap-7 sm:justify-center">
              <span>E-mail:</span>
              <a href=""> contact@mahsecurity.de</a>
            </div>
          </div>
        </div>

        {/* right */}
        <div
          id="form"
          className="max-md:mt-10 w-full md:flex-1 p-4 opacity-0 translate-x-[100%]  "
        >
          {" "}
          <Form title="apply for job" />{" "}
        </div>
      </div>

      {/* footer */}
      <Footer />

      {/* copyrights  */}
      <CopyRights />
    </main>
  );
};

export default Contact;
