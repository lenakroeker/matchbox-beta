import React from "react";
import styled from "styled-components";
import HeroImg from "./assets/chicago4-edit.jpg";

export default function Hero() {
  return (
    <Wrapper>
      <HeroText>
        <Title2>The Next Generation of Green Design</Title2>
        <P>
          Developed to enable the delivery of net-zero and regenerative
          buildings, MATCHBOX allows designers to visualize and track the energy
          effects of their decisions from the initial stages of design to
          completion. MATCHBOX is useful, Elemental Technology in Compact Form.{" "}
        </P>
      </HeroText>
      <ImgDiv>
        <Img src={HeroImg} />
      </ImgDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 70px;
  background: white;
  height: 480px;
  display: flex;
  width: 100%;
  @media (max-width: 500px) {
    display: block;
    height: auto;
  }
`;

const HeroText = styled.div`
  width: 40%;
  margin: 50px 5px 50px 10vw;
  @media (max-width: 500px) {
    width: 80vw;
    margin: 100px 10vw 50px 10vw;
    z-index: 5;
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  width: 60%;
  height: 400px;
  @media (max-width: 500px) {
    width: 100%;
    opacity: 0.3;
    margin-top: -450px;
    z-index: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const Title2 = styled.h1`
  color: black;
  margin-left: 10px;
  font-size: 3vw;
  @media (max-width: 500px) {
    margin-top: 0px;

    width: 80vw;
    margin: auto;
    font-size: 10vw;
  }
`;

const P = styled.p`
  font-size: 18px;
  font-weight: light;
`;
