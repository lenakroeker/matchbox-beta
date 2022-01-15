import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Video from "./HeroVideo.js";
import Quotes from "./Quotes";
import Users from "./Users";
import Back from "./assets/back.jpg";
import Info from "./Info.js";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Video />
      <Info />
      <Quotes />
      <Users />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${Back});
  min-height: 70vh;
  margin-top: 100px;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-position: -30% 110%;
`;
