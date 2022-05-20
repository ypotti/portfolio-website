import React from "react";
import profile from "../assests/Image-group.png";

const About = () => {
  return (
    <div
      className="w-100 pt-5 pb-5 ps-4 bg-dark-blue d-flex flex-column"
      id="About"
    >
      <div className="text-light pb-5" data-aos="fade-right">
        <div className="d-flex align-items-center">
          <div className="line-div"></div>
          <div className="section-heading ps-3">About</div>
        </div>
        <div className="text-light pt-5 fw-bolder">
          <h1>Get a closer look at who I am</h1>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row mt-5 text-light justify-content-between align-items-center">
        <div className="order-0 order-lg-1 mb-3">
          <img src={profile} alt="Yaswanth Potti" className="w-50" />
        </div>
        <div className="order-1 order-lg-0">
          <div className="d-flex flex-column mb-5">
            <div className="d-flex align-items-center mb-3">
              <div className="line-small-div"></div>
              <div className="section-heading ps-3 text-light ">Who am I</div>
            </div>
            <div className="coloured-text">
              <div className="mb-3">
                I'm Yaswanth Potti, 23 years old and from Hyderabad.
              </div>
              <div className="mb-3">
                Digital design has been an interest of mine for many years, and
                I work with anything from UI design to front-end development.
              </div>
              <div className="mb-3">
                All the skills and tools I use, are self-taught over many years
                of practice and expanding my horizons.
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <div className="line-small-div"></div>
              <div className="section-heading ps-3 text-light ">{`Skills & Tools`}</div>
            </div>
            <div className="coloured-text">
              <div className="mb-3">Icons</div>
            </div>
          </div>
          <button className="butn">
            <a className="a" href="#">
              Get in Touch
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
