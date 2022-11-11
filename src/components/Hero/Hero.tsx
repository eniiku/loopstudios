import { Fragment } from "react";

import Navbar from "../Navbar/Navbar";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <h1 className="hero__head heading-text">
        immersive experiences that deliver
      </h1>
    </div>
  );
};

export default Hero;
