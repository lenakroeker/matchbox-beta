import React from "react";
import styled from "styled-components";
import Green from "./assets/newgreen.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";

export default function HeroVideo() {
  return (
    <Div>
      <ScrollAnimation animateIn="fadeIn">
        <Img src={Green} />
        <Wrapper className="player-wrapper">
          <Player
            url="https://streamable.com/l75t64"
            width="100%"
            height="100%"
            controls={false}
          />
        </Wrapper>
        {/* <ReactPlayer url="https://streamable.com/2vgiye" controls="true" /> */}
      </ScrollAnimation>
    </Div>
  );
}

const Div = styled.div`
  margin: 3% auto;
  text-align: center;
  width: 50vw;
  @media (max-width: 500px) {
    margin: 40px auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
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
