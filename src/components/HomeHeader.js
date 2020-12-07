import React from "react";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';
const HomeHeader = () => {
  return (
    <section className="home-header">
      <section className="header-text-section">
		  <Slide left>
        <h1 className="block home-header-text">
				  The virtual venue for all your events
        </h1>
        <br />
        <h4 style={{color:"white"}}>
				  Ai For Rural is an online events platform where you can create engaging virtual events that connect people around the globe.
        </h4>
        <br />
        <Link to="/about" className="header-btn">
          Talk to us
        </Link>
			  </Slide>
      </section>
    </section>
  );
};

export default HomeHeader;
