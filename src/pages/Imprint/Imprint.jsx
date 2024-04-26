import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CopyRights from "../../Components/CopyRights/CopyRights";
import "./style.css";
import { useEffect, useRef } from "react";
import ScrollButton from "../../Components/ScrollButton/ScrollButton";

const Imprint = () => {
  const startRef = useRef();
  useEffect(() => {
    startRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  });

  return (
    <main className="bg-primary_bg  w-[100vw]" id="imprint">
      {/* scroll button */}

      <div ref={startRef}></div>
      {/* navbar */}
      <Navbar />

      {/* <NavBar/> */}
      <section className="w-full min-h-[100vh] p-4 flex ">
        {/* container */}
        <div className=" h-full pt-[150px] max-w-4xl mx-auto">
          <h1 className="">imprint </h1>
          <p> mah security</p>
          <p>Mah-Security</p>
          <p>Apt. 658 Stralsunder Str. 57b, West Isabella, TH 33185</p>
          <p></p>
          <p className=""> tax number:121/121/41508</p>

          {/*  */}
          <h1> Contact </h1>
          <p> Telephone:01128354361</p>
          <p>Email: mahsecurity@gmail.com</p>

          {/*  */}
          <h1> Copyrights notice </h1>
          <p>
            This information gives you mah-security , mah security B.V. Please
            feel free to download it again.
          </p>

          <p>
            Mah Security B.V. Be sure to check the overflow of the website on
            your website and use it in your database. Mah Security B.V. The
            website also contains information about tracking cookies.
            Information about Mah Security B.V. The middle cookies can be used
            to analyze all types of cookies. Mah Security B.V. Heeft op Google
            Analytics . Mah Security B.V. This door contains more information
            for you:
          </p>

          <h1>Liability for content</h1>

          <p>
            As a service provider, we are responsible for our own content on
            these pages in accordance with general laws in accordance with
            Section 7 Paragraph 1 TMG. However, according to Sections 8 to 10
            TMG, as a service provider we are not obliged to monitor transmitted
            or stored third-party information or to investigate circumstances
            that indicate illegal activity. Obligations to remove or block the
            use of information in accordance with general law remain unaffected.
            However, liability in this regard is only possible from the time of
            knowledge of a specific legal violation. If we become aware of any
            corresponding legal violations, we will immediately remove this
            content.
          </p>
        </div>
      </section>

      {/* footer */}
      <Footer />

      {/* copyrights */}
      <CopyRights />
    </main>
  );
};

export default Imprint;
