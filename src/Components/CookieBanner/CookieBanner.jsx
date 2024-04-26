import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
const CookieBanner = () => {
  const [isVisiable, setIsVisiable] = useState(true);
  const [active, setActive] = useState("accept");

  useGSAP(() => {
    gsap.to("#cookie", {
      opacity: 1,
      duration: 3,
    });
  }, []);
  const buttons = [
    {
      name: "Reject all",
      state: "reject",
    },
    {
      name: "Personalize",
      state: " personalize",
    },
    {
      name: "Accept all",
      state: " accept",
    },
  ];
  return (
    <>
      {isVisiable && (
        <div
          className="bg-primary_bg fixed  bottom-0 left-0 h-[200px] w-screen z-10 p-6 opacity-0"
          id="cookie"
        >
          <div className="w-full ">
            <h3 className="text-2xl mb-5 italic"> Set the cookies</h3>

            <div className="w-full flex md-flex-row items-center ">
              <p className="flex-1 italic">
                We use cookies on this site to enhance the user experience. By
                clicking on the button "accept all", you give your consent to
                have the cookies stored.
              </p>
              <div className="flex-1 flex items-center justify-center  gap-5 ">
                {buttons.map((button) => (
                  <button
                    key={button.name}
                    onClick={() => {
                      setIsVisiable(false);
                    }}
                    className={`${
                      "accept" === "accept" ? "opacity-100" : "opacity-60"
                    } border-[1px] border-gold h-[40px] w-[100px] rounded-xl opacity-60 hover:opacity-100`}
                  >
                    {button.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
