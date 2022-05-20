import React, { useContext } from "react";
import Logo from "../assests/logo.svg";
import "./style.css";
import { navItems } from "../constants";
import { PageContext } from "../App";
import { Link } from "react-scroll";
const TopNav = () => {
  const { selectedPage, setSelectedPage } = useContext(PageContext);
  return (
    <div className="Top-Nav d-none d-md-block w-100 bg-dark-blue fixed-top ps-4 pt-4 pb-2 pe-4 d-md-flex justify-content-between align-items-center">
      <img src={Logo} alt="logo" className="main-logo" />
      <div>
        <ul className="d-flex ul me-5">
          {navItems.map((item, index) => (
            <li
              className={`li ${selectedPage === item.name && "selected"}`}
              key={`${item}-${index}`}
            >
              <Link
                to={item.name}
                className="a"
                onClick={() => setSelectedPage(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
