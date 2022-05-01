import React from "react";
import "./style.css";
import hero from "../assests/hero_image";

const Home = () => {
  return (
    <div className="w-100 bg-dark-blue h-100vh text-light d-flex justify-content-start align-items-end ps-4">
      <div className="align-self-center">
        <h1>
          Hey, I'm <span className="pink-text">Yaswanth Potti</span>
        </h1>
        <h1>
          a self taught{" "}
          <span className="pink-text">Frontend Web developer</span>
        </h1>
      </div>
      <div className="d-none d-lg-block">
        <img src={hero} alt="image" className="hero-image" />
      </div>
    </div>
  );
};

export default Home;
