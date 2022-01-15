import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export default function Pricing() {
  return (
    <Wrapper>
      <PageTitle>Pricing</PageTitle>
      <Prices>
        <PriceCard>
          <Title>Basic</Title>
          <Price>$300</Price>
          <Per>/Year</Per>
          <Info>1 account</Info>
          <Info>info</Info>
          <Info>info</Info>
          <Signup exact to="/signup">
            Sign up
          </Signup>
        </PriceCard>
        <PriceCard>
          <Title>Premium</Title>
          <Price>$500</Price>
          <Per>/Year</Per>
          <Info>2-10 accounts</Info>
          <Info>info</Info>
          <Info>info</Info>
          <Signup exact to="/signup">
            Sign up
          </Signup>
        </PriceCard>
        <PriceCard>
          <Title>Business</Title>
          <Price>$2000</Price>
          <Per>/Year</Per>
          <Info>10-100 accounts</Info>
          <Info>info</Info>
          <Info>info</Info>
          <Signup exact to="/signup">
            Sign up
          </Signup>
        </PriceCard>
        <PriceCard>
          <Title>Educational</Title>
          <Price>$200</Price>
          <Per>/Term</Per>
          <Info>Includes students of one class + instructor</Info>
          <Info>info</Info>
          <Info>info</Info>
          <Signup exact to="/signup">
            Sign up
          </Signup>
        </PriceCard>
      </Prices>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 120px 10vw 50px 10vw;
  min-height: 80vh;
  text-align: center;
  @media (max-width: 1000px) {
    margin: 150px 8vw 50px 8vw;
  }
`;

const PageTitle = styled.div`
  font-size: 30px;
  margin: 40px auto;
  font-weight: bold;
  color: rgb(110, 175, 186);
`;

const Prices = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const PriceCard = styled.div`
  height: 340px;
  background: rgb(237, 244, 245);
  margin: 10px 1vw;
  width: 25%;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.8s ease-in-out;
  &:hover {
    background: rgb(237, 244, 245, 0.5);
    height: 360px;
    width: 26%;
    margin: -1px 0.7vw 11px 0.7vw;
  }
  @media (max-width: 768px) {
    margin: 20px 0;
    width: 80vw;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const Price = styled.div`
  font-size: 60px;
  font-weight: bold;
  opacity: 0.5;
`;

const Per = styled.div`
  font-size: 20px;
  font-weight: bold;
  opacity: 0.5;
`;

const Info = styled.div`
  font-size: 16px;
  text-align: left;
  padding: 10px 0;
  margin: 0 10%;
  border-bottom: 1px solid black;
`;

const Signup = styled(NavLink)`
  background: black;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 7px;
  position: absolute;
  bottom: 30px;
  text-decoration: none;
  @media (max-width: 768px) {
    position: relative;
    top: 30px;
  }
`;