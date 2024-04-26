import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const CopyRights = () => {
  const location = useLocation();

  const handleClick = (page) => {
    if (location.pathname === page) {
      scrollToTop();
    }
  };
  return (
    <section className="w-full bg-primary_bg  flex-center py-3">
      {/* container */}
      <div className="max-w-[1200px] mx-auto flex flex-col  items-center w-full gap-3 md:flex-row md:justify-center">
        {/* text */}
        <p className="text-xs">
          © MAH-security Risks 2024 - All rights reserved
        </p>

        {/* links */}

        <div className="flex-center gap-1 text-xs">
          <span
            className="hover:underline ml-3"
            onClick={() => handleClick("/imprint")}
          >
            <Link to="/imprint"> Imprent </Link>
          </span>
          <span
            className="hover:underline ml-3"
            onClick={() => handleClick("/privacy")}
          >
            <Link to="/privacy"> Privacy policy </Link>
          </span>
          <span
            className="hover:underline ml-3"
            onClick={() => handleClick("/")}
          >
            <Link to="/">Home</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CopyRights;
