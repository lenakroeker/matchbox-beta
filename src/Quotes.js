import React from "react";
import styled, { keyframes } from "styled-components";
import Danny from "./assets/danny.jpg";
import Jenny from "./assets/jenny.jpg";
import John from "./assets/john.jpg";
import Keith from "./assets/keith.jpg";
import QuoteMark from "./assets/quotes.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Quotes() {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn">
        <Slider>
          <SliderContent>
            <Div>
              <Quote>
                <QuoteProfile>
                  <QuoteImgDiv>
                    <Img src={John} />
                  </QuoteImgDiv>
                  <BackImg src={QuoteMark} />

                  <QuoteName>
                    <Name>John McMinn</Name>
                    <Title>Professor,</Title>
                    <Inst>University of Waterloo School of Architecture</Inst>
                  </QuoteName>
                </QuoteProfile>
                <QuoteText>
                  I used MATCHBOX software with my 1st year Masters architecture
                  students to analyze their designs in a studio based on green
                  building principles for an educational building complex. The
                  students found the program very user friendly and intuitive,
                  and were able to quickly gain a good comprehensive analysis of
                  the performance of their projects. We’ll be using the software
                  again for upcoming studios. It’s great for students to have
                  this kind of comprehensive, accurate analysis of their
                  projects as a learning tool in creating successful, efficient
                  buildings as part of their educational process.
                </QuoteText>
              </Quote>
            </Div>
            <Div>
              <Quote>
                <QuoteProfile>
                  <QuoteImgDiv>
                    <Img src={Keith} />
                  </QuoteImgDiv>
                  <BackImg src={QuoteMark} />

                  <QuoteName>
                    <Name>Keith Robertson,</Name>
                    <Title>Principal,</Title>
                    <Inst>Solterre Design Halifax, Nova Scotia</Inst>
                    <Title> Instructor</Title>
                    <Inst>Dalhousie University</Inst>
                  </QuoteName>
                </QuoteProfile>
                <QuoteText>
                  Solterre has used Matchbox on a number of projects as a quick
                  way to assess the energy impact of early design strategies. We
                  have done one post-occupancy assessment for a small Passive
                  House certified commercial building and found that Matchbox
                  very closely modeled the actual energy use.
                </QuoteText>
              </Quote>
            </Div>
            <Div>
              <Quote>
                <QuoteProfile>
                  <QuoteImgDiv>
                    <Img src={Danny} />
                  </QuoteImgDiv>
                  <BackImg src={QuoteMark} />

                  <QuoteName>
                    <Name>Daniel Pearl</Name>
                    <Title>Principal,</Title>
                    <Inst> L’OEUF Architects</Inst>
                    <Title> Professor,</Title>
                    <Inst>Université de Montréal</Inst>
                  </QuoteName>
                </QuoteProfile>
                <QuoteText>
                  Having used Matchbox in an academic setting for several years,
                  side by side with other 3d-simulation software, I can attest
                  that Matchbox is an excellent pedagogical tool. Learning what
                  works and why is it’s most valuable asset. Matchbox is
                  precisely designed to help students and professionals remove
                  the outer black box and see how the engine really works. From
                  zoning a building, to playing with it’s program flexibility,
                  orientation and form, Matchbox can quickly let designers
                  understand the profound effect they have on a building’s
                  energy performance through quick design iterations. All
                  students should be exposed to their design’s energy
                  performance as early on as possible so that passive design
                  principles can be honed before formal design issues are
                  entrenched.
                </QuoteText>
              </Quote>
            </Div>
            <Div>
              <Quote>
                <QuoteProfile>
                  <QuoteImgDiv>
                    <Img src={Jenny} />
                  </QuoteImgDiv>
                  <BackImg src={QuoteMark} />

                  <QuoteName>
                    <Name>Jennifer Corson</Name>
                    <Title>Principal,</Title>
                    <Inst>Solterre Design Halifax, Nova Scotia</Inst>
                    <Title> Instructor</Title>
                    <Inst>Dalhousie University</Inst>
                  </QuoteName>
                </QuoteProfile>
                <QuoteText>
                  Solterre has used Matchbox on a number of projects as a quick
                  way to assess the energy impact of early design strategies.
                  Knowing energy performance in schematic design phase helps to
                  focus on better performing buildings early in the planning
                  process. On a post-occupancy assessment for a small Passive
                  House-certified commercial building we found that Matchbox
                  very closely modelled the actual energy use, with its
                  comprehensive and easy-to-use platform. Matchbox is also a
                  wonderful introduction for students who can test their
                  designs, and see the impact of changes of orientation, glazing
                  and insulation. This is great training for their careers in
                  architecture, engineering and construction.
                </QuoteText>
              </Quote>
            </Div>
            <Div>
              <Quote>
                <QuoteProfile>
                  <QuoteImgDiv>
                    <Img src={John} />
                  </QuoteImgDiv>
                  <BackImg src={QuoteMark} />

                  <QuoteName>
                    <Name>John McMinn</Name>
                    <Title>Professor,</Title>
                    <Inst> University of Waterloo School of Architecture</Inst>
                  </QuoteName>
                </QuoteProfile>
                <QuoteText>
                  I used MATCHBOX software with my 1st year Masters architecture
                  students to analyze their designs in a studio based on green
                  building principles for an educational building complex. The
                  students found the program very user friendly and intuitive,
                  and were able to quickly gain a good comprehensive analysis of
                  the performance of their projects. We’ll be using the software
                  again for upcoming studios. It’s great for students to have
                  this kind of comprehensive, accurate analysis of their
                  projects as a learning tool in creating successful, efficient
                  buildings as part of their educational process.
                </QuoteText>
              </Quote>
            </Div>
          </SliderContent>
        </Slider>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: transparent;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: 80px;
`;

const BackImg = styled.img`
  position: absolute;
  width: 15%;
  top: 0;
  margin-left: 13%;
  opacity: 0.5;
  @media (max-width: 800px) {
    top: 36vw;
    margin-left: 0%;
  }
`;

const slide = keyframes`
 0%{
			transform:translateX(0);
		  }
		  5%, 25%{
			transform:translateX(-70vw);
		  }
		  30%, 50%{
			transform:translateX(-140vw);
		  }
		  55%, 75%{
			transform:translateX(-210vw);
		  }
		  80%, 100%{
			transform:translateX(-280vw);
		  }

`;

const slidemobile = keyframes`
 0%{
			transform:translateX(0);
		  }
		  5%, 25%{
			transform:translateX(-100vw);
		  }
		  30%, 50%{
			transform:translateX(-200vw);
		  }
		  55%, 75%{
			transform:translateX(-300vw);
		  }
		  80%, 100%{
			transform:translateX(-400vw);
		  }

`;

const Slider = styled.div`
  margin-top: 10px;
  margin-left: 15vw;
  border-radius: 10px;
  margin-bottom: 15px;

  width: 70vw;
  height: auto;
  box-shadow: -2px 4px 10px 0px lightgrey;

  background: rgb(237, 244, 245);
  overflow-x: hidden;
  @media (max-width: 800px) {
    width: 100vw;
    margin-left: 0;
    height: auto;
  }
`;

const SliderContent = styled.ul`
  list-style: none;
  display: flex;
  animation: ${slide} 15s ease-in-out infinite;
  margin: 0;
  padding: 0;

  &:hover {
    animation-play-state: paused;
  }
  @media (max-width: 800px) {
    animation: ${slidemobile} 15s ease-in-out infinite;
  }
`;

const Quote = styled.div`
  width: calc(70vw - 40px);
  height: 270px;
  display: flex;
  margin: 0px 20px 0px 20px;
  font-size: 18px;
  @media (max-width: 800px) {
    display:block;
    width: 90vw;
    margin: 20px 5vw 0px 5vw;
    height: auto;
`;

const QuoteText = styled.div`
  margin-right: 30px;
  font-size: 16px;
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  /* Column | row */
  @media (max-width: 800px) {
    text-align: left;
    width: 100%;
    display: block;
    margin: 10px 10px 40px;
  }
`;

const QuoteName = styled.div`
  font-size: 12px;
  margin: 0px 10px;
`;

const Name = styled.div`
  font-size: 18px;
`;
const Title = styled.div`
  font-weight: bold;
  color: grey;
  margin-top: 5px;
`;
const Inst = styled.div``;

const QuoteProfile = styled.div`
  margin: 0 3vw;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const QuoteImgDiv = styled.div`
  width: 7vw;
  background: transparent;
  height: 7vw;
  margin-bottom: 10px;
  margin-top: 20px;
  @media (max-width: 800px) {
    width: 40%;
    height: 40%;
    margin-top: 5px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 500px;
`;

const Div = styled.li`
  margin: 0;
  height: auto;
`;
