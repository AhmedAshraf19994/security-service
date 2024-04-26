import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import DataPrivacy from "./pages/DataPrivacy/DataPrivacy";
import Imprint from "./pages/Imprint/Imprint";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Custome from "./pages/Custome/Custome";

const App = () => {
  return (
    <>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<Home />} />

        {/* contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* data privacy */}
        <Route path="/privacy" element={<DataPrivacy />} />

        {/* imprint page */}
        <Route path="/imprint" element={<Imprint />} />

        {/* not found page  */}
        <Route path="*" element={<PageNotFound />} />

        {/* test */}
        <Route path="/test" element={<Custome />} />
      </Routes>
    </>
  );
};

export default App;
