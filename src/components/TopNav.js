import React, { useState } from "react";
import Logo from "../assests/logo.svg";
import "./style.css";
const TopNav = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div className="d-none d-md-block w-100 bg-dark-blue ps-4 pt-4 pb-2 pe-4 d-md-flex justify-content-between align-items-center">
      <img src={Logo} alt="logo" className="main-logo" />
      <div>
        <ul className="d-flex ul me-5">
          <li className={`li`} onClick={() => setSelectedItem("Home")}>
            <a href="#" className="a">
              Home
            </a>
          </li>
          <li className={`li `} onClick={() => setSelectedItem("Work")}>
            <a href="#" className="a">
              Work
            </a>
          </li>
          <li className={`li `} onClick={() => setSelectedItem("About")}>
            <a href="#" className="a">
              About
            </a>
          </li>
          <li className={`li `} onClick={() => setSelectedItem("Connect")}>
            <a href="#" className="a">
              Connect
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
