import React from "react";
import styled from "styled-components";
import Dal from "./assets/dal.png";
import UdeM from "./assets/UdeM.png";
import Waterloo from "./assets/waterloo.png";
import Mcgill from "./assets/mcgill.png";
import Wits from "./assets/Wits.png";
import Monterrey from "./assets/monterrey.png";
import Technologico from "./assets/tecnologico.png";
import Cardiff from "./assets/cardiff.png";
import Botswana from "./assets/botswana.png";
import Athabasca from "./assets/Athabasca.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Users() {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn">
        <Title>Our Users Include</Title>
        <FlexBox>
          <ImgDiv>
            <Img src={Dal} alt="dalhousie university" />
          </ImgDiv>
          <ImgDiv>
            <Img src={UdeM} alt="universite de montreal" />
          </ImgDiv>

          <ImgDiv>
            <Img src={Mcgill} alt="mcgill university" />
          </ImgDiv>
          <ImgDiv>
            <Img src={Athabasca} alt="athabasca university" />
          </ImgDiv>

          <ImgDivsm>
            <Img src={Botswana} alt="university of botswana" />
          </ImgDivsm>
          <ImgDiv>
            <Img src={Waterloo} alt="university of waterloo" />
          </ImgDiv>
          <ImgDiv>
            <Img src={Cardiff} alt="cardiff school of art and design" />
          </ImgDiv>
          <ImgDiv>
            <Img src={Technologico} alt="technologico de monterrey" />
          </ImgDiv>
          <ImgDiv>
            <Img
              src={Wits}
              alt="university of the witwatersrand, johannesburg"
            />
          </ImgDiv>
        </FlexBox>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  margin: 30px 8vw 0 8vw;
  padding-bottom: 30px;
  transition: 1s ease;
  width: 84vw;
  @media (max-width: 500px) {
    margin: 30px 0 0 0;
    width: 100%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h3`
  color: lightgrey;
  margin-left: 30px;
  font-weight: light;
`;

const ImgDiv = styled.div`
  width: 17%;
  height: auto;
  margin: 20px;
  transition: 1s ease;
  @media (max-width: 500px) {
    width: 35%;
  }
`;
const ImgDivsm = styled.div`
  width: 10%;
  height: auto;
  margin: 0px 20px;
  @media (max-width: 500px) {
    width: 16%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
