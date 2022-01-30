import React from "react";
import styled from "styled-components";
import Green from "./assets/newgreen.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";

import Vid from "./assets/matchbox-demo.mp4";
export default function HeroVideo() {
  return (
    <Div>
      <ScrollAnimation animateIn="fadeIn">
        <Img src={Green} />
        <ReactPlayer url={Vid} controls="true" />

        {/* <Video
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uBBkPDIavjI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        <VideoMobile
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/uBBkPDIavjI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></VideoMobile> */}
      </ScrollAnimation>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50vw;
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

const Video = styled.iframe`
  display: block;
  margin: auto;
  @media (max-width: 500px) {
    display: none;
  }
`;
const VideoMobile = styled.iframe`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
