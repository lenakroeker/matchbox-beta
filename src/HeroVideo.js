import React from "react";
import styled from "styled-components";
import Green from "./assets/newgreen.jpg";

import Vid from "./assets/matchbox-demo.mp4";
export default function HeroVideo() {
  return (
    <Div>
      <Img src={Green} />
      <Video width="640" height="auto" controls>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <VideoMobile width="100%" height="auto" controls>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoMobile>
    </Div>
  );
}

const Div = styled.div`
  margin: 0;
  text-align: center;
  background: pink;
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
  margin: auto;
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
