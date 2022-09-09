import React from "react";
import styled, { keyframes } from "styled-components";
import Rich from "./assets/rich2.jpg";
import Jake from "./assets/Jake.jpg";
import Trevor from "./assets/trevor.png";
import { BsLinkedin } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function AboutUs() {
  return (
    <Wrapper>
      <Head>
        <Title>About Us</Title>
        <About>
          MATCHBOX was developed to enable the delivery of net-zero and
          regenerative buildings, by enabling designers to visualize and track
          the energy effects of their decisions from the initial stages of
          design to completion. MATCHBOX useful, elemental technology in compact
          form.
        </About>
      </Head>
      <Head>
        <Title>Our Team</Title>
      </Head>
      <ProfileDiv>
        <ProfileCard>
          <ProfilePhoto>
            <Img src={Rich} />
          </ProfilePhoto>
          <ProfileName>Richard Kroeker</ProfileName>
          <ProfileCred>BES, AA dip, ARUK, Professor Emeritus</ProfileCred>
          <Linkedin
            href="https://www.linkedin.com/in/richard-kroeker-5a503319/"
            target="_blank"
          >
            <BsLinkedin size={20} />
          </Linkedin>
          <Website
            href="https://www.linkedin.com/in/richard-kroeker-5a503319/"
            target="_blank"
          >
            Website
            <FiExternalLink size={15} />
          </Website>
          <ProfileText>
            Richard Kroeker is a registered Architect and past Director at
            Dalhousie School of Architecture. He has been visiting architect and
            guest lecturer at a number of International Universities. Awards for
            teaching and practice include: Dalhousie University Senate
            Environment Award, Design Exchange Gold Medal for best Canadian
            cultural/commercial building of the year, Nova Scotia Lieutenant
            Governor's Masterwork Award, Erich Schelling Medal in Architecture,
            Chicago Athenaeum International Building of the year award.
            Richard's current work in architecture and teaching focuses on
            sustainability in response to cultural, environmental and economic
            issues
          </ProfileText>
        </ProfileCard>
        <ProfileCard>
          <ProfilePhoto>
            <Img src={Trevor} />
          </ProfilePhoto>
          <ProfileName>Trevor Butler</ProfileName>

          <ProfileCred>PEng CEng MSt (Cantab) LEED AP BD+C</ProfileCred>
          <Linkedin
            href="https://www.linkedin.com/in/trevor-butler-8920579/"
            target="_blank"
          >
            <BsLinkedin size={20} />
          </Linkedin>
          <ProfileText>
            Trevor Butler has over 20 years experience as an Architectural
            Engineer providing professional Mechanical and Civil Engineering
            input to a wide range of international projects. His work is
            characterized by a strong track record in the implementation of
            integrated sustainable design solutions that are delivered through
            am interdisciplinary approach. His recent work includes large scale
            Carbon-Neutral district energy and wastewater systems and detailed
            technical reports for the UNDP. He has been invited as guest
            lecturer at several leading universities and was appointed as
            Adjunct Professor at Dalhousie in 2001, where he began working with
            Richard Kroeker. He was voted the Sustainability Champion by the UK
            construction industry and is currently completing his PhD in
            sustainable building technology.
          </ProfileText>
        </ProfileCard>
        <ProfileCard>
          <ProfilePhoto>
            <Img src={Jake} />
          </ProfilePhoto>
          <ProfileName>Jacob Kroeker</ProfileName>

          <ProfileCred>MSc Computer Science, Dalhousie University</ProfileCred>

          <Linkedin
            href="https://www.linkedin.com/in/j-kroeker/"
            target="_blank"
          >
            <BsLinkedin size={20} />
          </Linkedin>
          <ProfileText>
            Jacob is a computer science major whose studies focus on
            computational neuroscience and machine learning. His interest in
            neuroscience research has led him to work in the Brain Repair Centre
            of the Life Sciences Research Institute at Dalhousie University,
            where he works on programs for the Cognitive Repair Kit, computer –
            user interface as well as creating and updating programs which
            require network connections. He is also a part of the team in other
            on-going research projects.
          </ProfileText>
        </ProfileCard>
      </ProfileDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 120px;
  min-height: 100vh;
  margin-bottom: 150px;

  @media (max-width: 1000px) {
    margin-top: 100px;
    font-size: 24px;
  }
`;
const Head = styled.div`
  text-align: center;
  margin: 0 13vw;
  @media (max-width: 500px) {
    margin: 0 5%;
    line-height: 1.3em;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 40px;
  font-weight: bold;
  color: rgb(110, 175, 186);
`;
const About = styled.div`
  line-height: 1.8em;
  margin: 0 7%;
  @media (max-width: 500px) {
    margin: 0 1%;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
const ProfileCard = styled.div`
  width: 23vw;
  min-width: 200px;
  height: auto;
  margin: 20px 20px;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 20px 10%;
  }
`;
const ProfilePhoto = styled.div``;
const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  @media (max-width: 1000px) {
    width: 60%;
    margin: auto 20%;
  }
`;
const ProfileName = styled.div`
  font-size: 30px;
`;

const ProfileCred = styled.div`
  font-size: 18px;
  color: rgb(51, 116, 130);
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const Linkedin = styled.a`
  color: black;
  margin-right: 20px;
  @media (max-width: 1000px) {
    margin: 20 20px;
  }
`;

const Website = styled.a`
  color: black;
  margin: 0 14px;
  font-weight: bold;
`;
const ProfileText = styled.div`
  margin-top: 10px;
`;
