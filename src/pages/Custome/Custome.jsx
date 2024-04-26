import React from "react";
import img from "../../../public/assets/images/img.jpg";

import "./style.css";
const Custome = () => {
  return (
    <>
      <div id="main">
        <iframe
          loading="lazy"
          id="iframe"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDWNwSbBg&#x2F;Xf8YfND3IzOGaP1ayX-ipg&#x2F;watch?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDWNwSbBg&#x2F;Xf8YfND3IzOGaP1ayX-ipg&#x2F;watch?utm_content=DAGDWNwSbBg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        Dark Blue Modern Geometric Simple Feature Section Website UI Prototype
      </a>
      by Ahmed Mody
    </>
    // <div className="w-screen h-screen " id="custome">
    //   <div className=" w-full h-screen flex gap-8">
    //     {/* left */}
    //     <div className="flex-1">
    //       <h1 className="text-[#c4c25f]">
    //         Guarding Solutions Tailored to Your Business
    //       </h1>
    //     </div>

    //     {/* right */}
    //     <div className="flex-1">
    //       <img
    //         src={img}
    //         alt=""
    //         className="w-[500px] h-[500px] mix-blend-multiply"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Custome;
