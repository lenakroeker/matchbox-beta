import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import Logo from "./assets/matchboxlogohorz.jpg";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import useDocumentScrollThrottled from "./scroll";

export const Header = () => {
  let history = useNavigate();

  //dropdown for mobile
  const [dropOpen, setDropOpen] = useState(false);

  const dropHandle = () => {
    setDropOpen(!dropOpen);
  };

  const dropClose = () => {
    setDropOpen(false);
  };

  //hidden header on scroll

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <Head className={`header ${shadowStyle} ${hiddenStyle}`}>
      <Logobox exact to="/">
        <Logohead MobileNavlist onClick={() => dropClose()} src={Logo} />
      </Logobox>
      <Nav>
        <Navlist>
          <Navitem exact to="/about">
            About us
          </Navitem>

          <Navitem exact to="/pricing">
            Pricing
          </Navitem>

          <Navitem exact to="/signup">
            Sign Up
          </Navitem>

          <Navitem exact to="/user-guide">
            User Guide
          </Navitem>

          <Login exact to="/signup">
            Log in
          </Login>
        </Navlist>
        <MobileNav>
          <NavIcon onClick={() => dropHandle()}>
            <HiMenu size={50} />
          </NavIcon>
          {dropOpen && (
            <MobileNavlist onClick={() => dropHandle()}>
              <MobileNavitem exact to="/about">
                About Us
              </MobileNavitem>
              <MobileNavitem exact to="/pricing">
                Pricing
              </MobileNavitem>

              <MobileNavitem exact to="/sign-up">
                Sign Up
              </MobileNavitem>

              <MobileNavitem exact to="/user-guide">
                User Guide
              </MobileNavitem>

              <MobileNavitemLogin exact to="/sign-up">
                Log In
              </MobileNavitemLogin>

              <GrClose size={30} />
            </MobileNavlist>
          )}
        </MobileNav>
      </Nav>
    </Head>
  );
};

const drop = keyframes`
  0% {
    margin: 10px 0;
    opacity:0.8;
  }
  100% {
    margin: 20px 0;
    opacity:1;
  }
`;

const drop2 = keyframes`
  0% {
    margin: 10px 0 20px 0;
    opacity:0.8;
  }
  100% {
    margin: 10px 0 40px 0;
    opacity:1;
  }
`;

const fadein = keyframes`
  0% {
opacity:0.3;  }
  100% {
opacity:1;     }
`;

const Head = styled.header`
  z-index: 100;
  display: flex;
  width: calc(100%-40px);
  height: auto;
  padding: 50px 0px 0 0px;
  padding-top: 10px;
  background: white;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  top: 0;
  line-height: 3em;
`;

const Logobox = styled(NavLink)``;
const Logohead = styled.img`
  height: 43px;
  margin-left: 10px;
  margin-top: -10px;
  @media (max-width: 1000px) {
    height: 53px;
  }
`;

const Nav = styled.nav`
  height: 20px;
`;

const Navlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -3px;
  list-style-type: none;
  color: black;
  width: auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const NavIcon = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 12px;
`;

const MobileNavlist = styled.ul`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    font-size: 20px;
    background: white;
    position: fixed;
    width: 50vw;
    height: auto;
    list-style-type: none;
    font-weight: bold;
    top: 43px;
    right: 0;
    padding: 10px 10px 10px 10px;
    z-index: 2000;
    text-align: center;
    border-radius: 0 0 00px 10px;
    animation: 1s ${fadein} ease-in-out;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

const MobileNavitem = styled(NavLink)`
  width: 100%;
  transition: 1s ease;
  height: 60px;
  padding-top: 10px;
  display: block;
  color: white;
  text-decoration: none;
  margin: 20px 0;
  background: rgb(29, 29, 31);
  border-radius: 5px;
  animation: 0.7s ${drop} ease-in-out;
`;

const MobileNavitemLogin = styled(NavLink)`
  width: 100%;
  transition: 1s ease;
  height: 60px;
  display: block;
  text-decoration: none;
  padding-top: 10px;
  margin: 10px 0 40px 0;
  color: black;
  background: rgb(153, 252, 53);
  border-radius: 5px;
  animation: 0.7s ${drop2} ease-in-out;
`;

const Navitem = styled(NavLink)`
  width: 140px;
  transition: 1s ease;
  text-decoration: none;
  color: black;
  &:hover {
    color: #37a9f2;
    cursor: pointer;
  }
`;

const Login = styled(NavLink)`
  background-color: black;
  color: white;
  width: 70px;
  height: 35px;
  text-align: center;
  padding: 0 15px 0 15px;
  line-height: 2em;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s ease;
  margin: 5px 10px 4px 10px;
  text-decoration: none;
  &:hover {
    color: #8efb2c;
  }
`;

export default Header;
