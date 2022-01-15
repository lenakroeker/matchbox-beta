import React from "react";
import styled from "styled-components";
import Logo from "./assets/logorev.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <Foot>
      <Box1>
        <Img src={Logo} height="100px" alt="logo" />
      </Box1>
      <Box2>
        <Box3>
          <Ul>
            <Link exact to="/about">
              <Li>About us</Li>
            </Link>
            <Link exact to="/user-guide">
              <Li>User Guide</Li>
            </Link>
            <Link exact to="/glossary">
              <Li>Glossary</Li>
            </Link>
            <Link exact to="/signup">
              <Li>Log in</Li>
            </Link>
          </Ul>
        </Box3>
        <Box4>
          <Ul>
            <Link exact to="/pricing">
              <Li>Pricing</Li>
            </Link>
            <Link exact to="/signup">
              <Li>Sign Up</Li>
            </Link>
            <Link exact to="/contact">
              <Li>Contact</Li>
            </Link>
          </Ul>
        </Box4>
      </Box2>
      <Box5></Box5>
    </Foot>
  );
}

const Foot = styled.div`
  background: black;
  height: 250px;
  display: flex;
  line-height: 2em;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const Box1 = styled.div`
  margin: 50px 60px 140px 10vw;
  @media (max-width: 1000px) {
    margin: 0;

    height: 30vw;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 80%;
  height: auto;
  margin: 0px 30%;
  @media (max-width: 1000px) {
    width: 40%;
    height: auto;
    margin: 30px 30%;
  }
`;

const Box2 = styled.div`
  color: white;
  display: flex;
  background: black;
  justify-content: space-around;
`;

const ContactInfo = styled.div``;

const ContactIcons = styled.div``;

const Icon = styled.div`
  margin-right: 10px;
`;

const Info = styled.div``;

const Box3 = styled.div`
  margin: 30px 10px;
  @media (max-width: 1000px) {
    width: 50%;
    margin: 30px 0;
  }
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
const Box4 = styled.div`
  margin: 30px 10px;
  @media (max-width: 1000px) {
    width: 50%;
    margin: 30px 0;
  }
`;
const Box5 = styled.div`
  margin: 30px 10px;
`;

const Ul = styled.ul`
  list-style-type: none;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const Li = styled.li`
  text-decoration: none;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 15px 0;
    text-align: center;
  }
`;
