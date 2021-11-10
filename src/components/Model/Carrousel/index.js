import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";
import Avatar from "../../../assets/img/avatar.png";

import Time from "../../../styles/Time.module.css";

export const Carousel1 = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.default,
  });

  let slides = [
    {
      key: 1,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span className={Time.span}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
    {
      key: 4,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
    {
      key: 5,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
    {
      key: 6,
      content: (
        <div className={Time.time}>
          <img className={Time.avatar} src={Avatar} alt="" />
          <h3>Nome</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: "100%", height: "500px", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};

export default Carousel1;
