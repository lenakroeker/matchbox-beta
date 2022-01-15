import React from "react";
import styled from "styled-components";
import Green from "./assets/newgreen.jpg";
import ScrollAnimation from "react-animate-on-scroll";

import Vid from "./assets/matchbox-demo.mp4";
export default function HeroVideo() {
  return (
    <Div>
      <ScrollAnimation animateIn="fadeIn">
        <Img src={Green} />
        <Video width="640" height="auto" controls>
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <VideoMobile width="100%" height="auto" controls>
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoMobile>
      </ScrollAnimation>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (max-width: 500px) {
    margin: 40px auto;
  }
`;
const Img = styled.img`
  position: absolute;
  right: 0;
  top: 120vh;
  z-index: -10;
  opacity: 0.5;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Video = styled.video`
  display: block;
  margin-left: calc(100% - 320px);
  @media (max-width: 500px) {
    display: none;
  }
`;
const VideoMobile = styled.video`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
