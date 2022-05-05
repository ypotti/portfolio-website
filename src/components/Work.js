import React from "react";
import covidProjectImage from "../assests/covid-tracker-group.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const Work = () => {
  return (
    <div className="bg-next-dark-blue ps-4 pt-5 pb-5 pe-5 d-flex flex-column justify-content-start">
      <div className="w-100 text-light pb-5" data-aos="fade-right">
        <div className="d-flex align-items-center">
          <div className="line-div"></div>
          <div className="section-heading ps-3">Work</div>
        </div>
        <div className="text-light pt-5 fw-bolder">
          <h1>Hand-picked projects</h1>
          <h1>for you to see.</h1>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-lg-row  text-light justify-content-between align-items-center"
        data-aos="fade-right"
      >
        <div className="order-0 order-lg-1 mb-3 floating">
          <img
            src={covidProjectImage}
            alt="Covid-Project"
            className="col-12 col-md-9 col-lg-12"
          />
        </div>
        <div className="order-1 order-lg-0 ms-4">
          <div className="d-flex align-items-center mb-5">
            <button className="arrow-button me-3">
              <ImArrowLeft2 className="butn-icon" />
            </button>
            <div>01/01</div>
            <button className="arrow-button ms-3">
              <ImArrowRight2 className="butn-icon" />
            </button>
          </div>
          <h1 className="mb-4">Covid Cases Tracker</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="line-small-div "></div>
            <div className="section-heading ps-3">React Application</div>
          </div>
          <div className="coloured-text mb-4 text-width">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div>
          <button className="butn">
            <a className="a" href="#">
              Visit Site
            </a>
            <MdOutlineKeyboardArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
