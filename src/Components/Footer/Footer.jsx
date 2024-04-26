import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "/assets/images/WhatsApp Image 2024-04-11 at 3.04.29 PM.jpeg";
import gsap from "gsap";
// import logo from "../../../public/assets/"

const Footer = () => {
  return (
    <footer className="w-full bg-primary_bg flex items-center justify-center px-10 py-20 opacity-90 ">
      {/* container  */}

      <div className=" w-full flex flex-col sm:flex-row gap-6 max-w-[1800px] opacity-90 justify-center items-center flex-wrap">
        {/*  left-logo */}
        <div
          className="flex-1  flex justify-center items-center mb-4 "
          id="logo"
        >
          <img
            src={logo}
            alt="logo"
            className="w-150px h-[150px] cursor-pointer hover:scale-110"
          />
        </div>

        {/* right info */}
        <div className="flex  flex-col gap-4 justify-center items-center">
          {/* about */}
          <div className="flex-1  flex-center flex-col gap-2 mb-4 h-[200px] ">
            <h4 className="font-semibold h3 cursor-pointer hover:underline">
              {" "}
              About us{" "}
            </h4>
            <p className="max-w-[300px]">
              Based in germany we offer expert advice and provide high-quality
              services in The germany, effectively tailored to your situation.
            </p>

            {/* social media  */}
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/"
                className="text-red-100 hover:opacity-45"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                className="text-red-100 hover:opacity-45"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-red-100 hover:opacity-45"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* emergency */}
          <div className="flex-1  flex flex-col   gap-3 h-[200px]  items-start italic w-full ">
            <h4 className="h3 hover:underline cursor-pointer font-semibold">
              {" "}
              EMERGENCY{" "}
            </h4>
            <h6 className="text-m opacity-70"> contact us directly</h6>
            <div className="flex items-center gap-3 cursor-pointer">
              {/* icon */}
              <div>
                {" "}
                <EmailIcon />
              </div>
              <div className="">
                <div className="font-semibold hover:underline"> EMAIL-US</div>
                <div className="text-sm">contact@gmail.com</div>
              </div>
            </div>
            <div className=" flex items-center gap-3 cursor-pointer">
              {/* icon */}
              <div>
                {" "}
                <CallIcon />
              </div>
              <div className="">
                <div className="font-semibold hover:underline"> CALL-US</div>
                <div className="text-sm font-normal ">contact@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className=" flex-1 h-[200px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.1391996724024!2d32.275751275058106!3d31.244569660717477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c1ae921da5b%3A0xbe3cd759956671e2!2sSpinning%20Club!5e0!3m2!1sen!2seg!4v1713608202752!5m2!1sen!2seg"
            width="800"
            height="600"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
