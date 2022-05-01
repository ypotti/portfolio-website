import React, { useContext } from "react";
import Logo from "../assests/logo.svg";
import "./style.css";
import { navItems } from "../constants";
import { PageContext } from "../App";
const TopNav = () => {
  const { selectedPage, setSelectedPage } = useContext(PageContext);
  return (
    <div className="d-none d-md-block w-100 bg-dark-blue fixed-top ps-4 pt-4 pb-2 pe-4 d-md-flex justify-content-between align-items-center">
      <img src={Logo} alt="logo" className="main-logo" />
      <div>
        <ul className="d-flex ul me-5">
          {navItems.map((item, index) => (
            <li
              className={`li ${selectedPage === item.name && "selected"}`}
              onClick={() => setSelectedPage(item.name)}
              key={`${item}-${index}`}
            >
              <a href="#" className="a">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
