import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  let history = useNavigate();

  //dropdown for mobile
  const [dropOpen, setDropOpen] = useState(false);

  const dropHandle = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <Wrapper>
      <Welcome>Welcome to SkillSwap!</Welcome>
      <MenuDrop>
        <DropBtn onClick={() => dropHandle()}>Menu</DropBtn>
        {dropOpen && (
          <DropdownContent onClick={() => dropHandle()}>
            <DropItem exact to="/">
              Home
            </DropItem>
            <DropItem exact to="/about">
              Search
            </DropItem>
            <DropItem exact to="/all">
              All Posts
            </DropItem>
          </DropdownContent>
        )}
      </MenuDrop>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  background-color: transparent;
  color: black;
  width: 100vw;
  height: 80px;
  text-align: center;
`;
const Welcome = styled.div`
  font-size: 14px;
`;

const MenuDrop = styled.div``;

const DropBtn = styled.button`
  border: 6px solid black;
  background: black;
  color: white;
  border-radius: 16px;
  cursor: pointer;
  margin: 10px;
  font-size: 18px;
  padding: 5px 8px;
  width: 50vw;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Img = styled.img`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const DropdownContent = styled.ul`
  margin-top: -5px;
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  left: 0;
  opacity: 0.9;
  background: transparent;
  width: 100vw;
  padding: 0 10vw;
  z-index: 5;
`;

const drop = keyframes`
  0% {
    margin: -1px 0;
  }
  100% {
    margin: 0.5px 0;
  }
`;

const DropItem = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 53vw;
  background: black;
  border: 6px solid white;
  border-radius: 20px;
  color: white;
  padding: 10px 10px;
  margin: 0.5px 0;
  animation: 0.5s ${drop} ease-in-out;
  &:hover {
    background: black;
  }
`;

export default Header;
