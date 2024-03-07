import React, { useEffect, useRef } from "react";
import profile from "../assests/yaswanth.png";

const About = ({ setAboutOffset }) => {
  const aboutRef = useRef();

  useEffect(() => {
    setAboutOffset(aboutRef.current.offsetTop);
  }, [aboutRef]);

  return (
    <div
      className="w-100 pt-5 pb-5 p-4 bg-dark-blue d-flex flex-column"
      id="About"
    >
      <div className="text-light pb-3" data-aos="fade-right" ref={aboutRef}>
        <div className="d-flex align-items-center">
          <div className="line-div"></div>
          <div className="section-heading ps-3">About</div>
        </div>
        <div className="text-light pt-5 fw-bolder">
          <h1>Get a closer look at who I am</h1>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row  text-light justify-content-between align-items-center">
        <div
          className="order-0 order-lg-1 mb-3 col-12 col-md-6 text-center"
          data-aos="fade-down"
        >
          <img src={profile} alt="Yaswanth Potti" className="About__image" />
        </div>
        <div
          className="order-1 order-lg-0 col-12 col-md-6 "
          data-aos="fade-right"
        >
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
                I work with anything from UI design to Frontend development.
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
            <div className="coloured-text mb-3">
              <div className="mb-2">
                <span className="me-2">Frontend:</span> HTML, CSS, Bootstrap,
                Javascript, React.js.
              </div>
              <div className="mb-2">
                <span className="me-2">Backend:</span> Node.js, Express.js,
                Firebase.
              </div>
              <div className="mb-2">
                <span className="me-2">UI Design:</span> Figma, Canva.
              </div>
              <div className="mb-2">
                <span className="me-2">Miscellaneous:</span> JSON, REST API,
                Git, GitHub.
              </div>
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
