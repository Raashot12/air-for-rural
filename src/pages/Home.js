import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import Parallax from "../components/Parallax";
import Footer from "../components/Footer";
import virtual from "../virtual-meetings.jpg"
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import distrupt  from "../tc-disrupt.png"
import adobe from "../abode.svg"
import webflow from "../webflow.svg";
import magnto from "../magnato.svg"
import Slide from "react-reveal/Slide";
import propel  from  "../Proper-Virtual.jpg"
const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 10s ${bounceAnimation};
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <section className="container-fluid">
        <section className="top-features-container">
          <section className="top-feature-sub-container">
            <div className="set-width">
              <section className="top-features-item">
                <BouncyDiv>
                  <img
                    className="features-img"
                    alt="features-img"
                    src={virtual}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFill: "fill",
                    }}
                  />
                </BouncyDiv>
              </section>
            </div>

            <section className="top-features-item-p ">
              <h2>Host your most interactive online event yet</h2>
              <p style={{ lineHeight: "30px" }}>
                Hopin is a virtual venue with multiple interactive areas that
                are optimized for connecting and engaging. Attendees can move in
                and out of rooms just like an in-person event and enjoy the
                content and connections you've created for them. The results?
                High show-up rates, low drop-off rates, and happy attendees.
              </p>
              <ul className="list">
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Host events of any
                  type or size
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Sell event tickets
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Engage your attendees
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Analyze data from
                  your event
                </li>
              </ul>
              <div className="underline"></div>
              <div>
                <p>Trusted by leading companies</p>
                <Slide right>
                  <div className="company-container">
                    <img src={distrupt} alt="" width="60px" height="20px" />
                    <img src={adobe} alt="" />
                    <img src={webflow} alt="" />
                    <img src={magnto} alt="" />
                  </div>
                </Slide>
              </div>
            </section>
          </section>

          <section className="top-feature-sub-container  bk-ground">
            <section className="top-features-item-side">
              <h2>
                The first all-in-one event platform optimized for connecting
              </h2>
              <p style={{ lineHeight: "30px" }}>
                Organizers can achieve the same goals of their offline events by
                customizing their Hopin events to fit the requirements, whether
                it's a 50-person recruiting event, a 500-person all-hands
                meeting, or a 50,000-person annual conference. Hopin is built
                knowing every event is unique.
              </p>
              <ul className="list">
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Attend full-fledged
                  live events
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Join hands-on
                  sessions
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Visit expo booths
                </li>
                <li>
                  <i class="fas fa-check icons"></i> &nbsp;Meet 1-on-1
                </li>
              </ul>
              <div className="underline"></div>
              <div>
                <p>Trusted by leading companies</p>
                <Slide left>
                  <div className="company-container">
                    <img src={distrupt} alt="" width="60px" height="20px" />
                    <img src={adobe} alt="" />
                    <img src={webflow} alt="" />
                    <img src={magnto} alt="" />
                  </div>
                </Slide>
              </div>
            </section>
            <div className="set-width">
              <section className="top-features-item">
                <BouncyDiv>
                  <img
                    className="featured-image"
                    alt="features-img"
                    src={propel}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFill: "fill",
                    }}
                  />
                </BouncyDiv>
              </section>
            </div>
          </section>
        </section>
      </section>
      <Parallax />
      <Footer />
    </>
  );
};

export default Home;
