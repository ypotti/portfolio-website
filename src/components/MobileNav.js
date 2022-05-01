import React from "react";
import "./style.css";
import { navItems } from "../assests/constants.js";

const MobileNav = () => {
  return (
    <div className="d-md-none mobile-nav d-flex fixed-bottom bg-dark-blue coloured-text justify-content-around">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="d-flex flex-column align-items-center flex-fill p-3"
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
