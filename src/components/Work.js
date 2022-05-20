import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { projects } from "../constants";

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedProject = projects[selectedIndex];

  const handleLeftClick = () => {
    let targetIndex = selectedIndex - 1;
    if (targetIndex < 0) {
      targetIndex = projects.length - 1;
    }
    setSelectedIndex(targetIndex);
  };
  const handleRightClick = () => {
    let targetIndex = selectedIndex + 1;
    if (targetIndex >= projects.length) {
      targetIndex = 0;
    }
    setSelectedIndex(targetIndex);
  };

  return (
    <div
      className="bg-next-dark-blue ps-4 pt-5 pb-5 pe-5 d-flex flex-column justify-content-start"
      id="Work"
    >
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
        <div className="order-0 order-lg-1 mb-3 floating" data-aos="fade-right">
          {selectedProject.pic}
        </div>
        <div className="order-1 order-lg-0 ms-4">
          <div className="d-flex align-items-center mb-5">
            <button className="arrow-button me-3" onClick={handleLeftClick}>
              <ImArrowLeft2 className="butn-icon" />
            </button>
            <div>{`0${selectedProject.id} / 0${projects.length}`}</div>
            <button className="arrow-button ms-3" onClick={handleRightClick}>
              <ImArrowRight2 className="butn-icon" />
            </button>
          </div>
          <div data-aos="fade-right">
            <h1 className="mb-4">{selectedProject.name}</h1>
            <div className="d-flex align-items-center mb-3">
              <div className="line-small-div "></div>
              <div className="section-heading ps-3">
                {selectedProject.subtitle}
              </div>
            </div>
            <div className="coloured-text mb-4 text-width">
              {selectedProject.description}
            </div>
            <button className="butn">
              <a className="a" href={selectedProject.url} target="_blank">
                Visit Site
              </a>
              <MdOutlineKeyboardArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
