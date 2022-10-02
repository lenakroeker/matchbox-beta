import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default function Users() {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn">
        <Title>Our Users Include:</Title>
        <FlexBox>
          <User>Dalhousie University</User>
          <User>McGill University</User>
          <User>Athabasca University</User>
          <User>University of Botswana</User>
          <User>University of Waterloo</User>
          <User>Universite de Montreal</User>
          <User>Cardiff School of Art and Design</User>
          <User>Technologico de Monterrey</User>
          <User>University of the Witwatersrand, Johannesburg</User>
        </FlexBox>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  margin: 30px 8vw 0 8vw;
  padding: 30px 10vw 80px 10vw;
  transition: 1s ease;
  text-align: center;
  @media (max-width: 500px) {
    margin: 30px 0 0 0;
    width: 80%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin: 40px auto;
  opacity: 0.8;
  color: rgb(110, 175, 186);
`;

const User = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 20px;
  font-family: "Red Hat Display", sans-serif;
  transition: 1s ease-in-out;
  &:hover {
    text-shadow: 0px 0px 10px rgba(50, 152, 179, 0.39);
  }
`;
