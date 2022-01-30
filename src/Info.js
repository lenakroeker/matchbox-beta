import React from "react";
import styled from "styled-components";
import One from "./assets/stats1.jpg";
import Two from "./assets/stats2.jpg";
import Three from "./assets/stats3.jpg";
import Four from "./assets/box4.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Info() {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn">
        <Flex>
          <Box1>
            <Img src={One} />
            <Title>Accurate</Title>
            <InfoText>
              Has been accurate within 10% or less of target predicted energy
              use*
            </InfoText>
            <SubText>*In all monitored tests</SubText>
          </Box1>
          <Box2>
            <Img src={Two} />
            <Title>Versatile</Title>
            <InfoText>
              Energy model from day one of the design process, as well as
              exisiting buildings and green retrofits
            </InfoText>
          </Box2>
          <Box3>
            <Img src={Three} />
            <Title>Efficient</Title>
            <InfoText>
              Efficiently integrates into exisiting workflows, can be used by
              anyone along side their chosen design suite.
            </InfoText>
          </Box3>
        </Flex>
        <Box4>
          <Img src={Four} />
          <Title>In-Depth</Title>
          <InfoText>
            Calculates energy consumtion using data across 4 key areas:
            <Ul>
              <Li>Climate + Enviroment</Li>
              <Li>Internal Operations</Li>
              <Li>External Envelope</Li>
              <Li>Building Specifications</Li>
            </Ul>
          </InfoText>
        </Box4>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Flex = styled.div`
  margin: 40px 10vw 50px 10vw;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: block;
    margin: 0px 3vw 50px 3vw;
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 20px;
  box-shadow: 30px 30px 40px 40px rgb(99, 124, 138, 0.1);
  margin: 20px;
  margin-top: 100px;
  @media (max-width: 500px) {
    width: 96%;
    margin: 0px 3vw 10px 3vw;
    height: 270px;
  }
`;

const Box2 = styled.div`
  width: 50%;
  margin: 20px;
  height: 40%;
  border-radius: 20px;
  box-shadow: 3px 3px 30px 30px rgb(99, 124, 138, 0.1);
  z-index: 10;
  position: relative;
  @media (max-width: 500px) {
    width: 96%;
    margin: 40px 3vw 10px 3vw;
    height: 250px;
  }
`;

const Box3 = styled.div`
  width: 50%;
  margin: 20px;
  margin-top: 200px;
  height: 50%;
  border-radius: 20px;
  box-shadow: 3px 3px 30px 30px rgb(99, 124, 138, 0.1);
  z-index: 0;
  @media (max-width: 500px) {
    width: 96%;
    margin: 40px 3vw 10px 3vw;
    height: 250px;
  }
`;

const Box4 = styled.div`
  width: 23%;
  text-align: center;
  margin: 20px auto;
  margin-top: -220px;
  height: 23vw;
  border-radius: 20px;
  box-shadow: 3px 3px 30px 30px rgb(99, 124, 138, 0.1);
  z-index: 0;
  @media (max-width: 500px) {
    width: 78%;
    margin: -50px 7vw 10px 12vw;
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const InfoText = styled.div`
  margin: 10px 30px 40px 30px;
  @media (max-width: 500px) {
    margin: 10px 30px 60px 30px;
  }
`;
const SubText = styled.div`
  margin: 20px;
  font-size: 14px;
`;

const Ul = styled.ul`
  text-align: left;
`;

const Li = styled.li`
  font-size: 14px;
`;
