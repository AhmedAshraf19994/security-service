import React from "react";

const NavItem = ({ children }) => {
  return (
    <li className="flex  justify-center items-center   hover:-translate-y-1.5 transition duration-200 ease-out  rounded-xl  px-2 hover:opacity-100 opacity-60 text-[18px]">
      {children}
    </li>
  );
};

export default NavItem;
