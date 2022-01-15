import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

export default function Guide() {
  return (
    <Wrapper>
      <TitleDiv>
        <Title>Matchbox Energy User Guide</Title>
      </TitleDiv>

      <Iframe
        width="450"
        height="315"
        src="https://www.youtube.com/embed/0V0_3SSzZP8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <IframeMobile
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/0V0_3SSzZP8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></IframeMobile>
      <P>There are four headings on the top bar:</P>
      <Ul>
        <Li>File</Li>
        <Li>View</Li>
        <Li>Results</Li>
        <Li>Help</Li>
      </Ul>
      <P>There are four headings on the bar below:</P>
      <Ul>
        <Li>Climatic Environment</Li>
        <Li>Internal Operations</Li>
        <Li>External Envelope</Li>
        <Li>Building Specifications</Li>
      </Ul>
      <P>
        If you need more guidance, consult <Bold>Glossary</Bold>{" "}
        <Navitem exact to="/glossary">
          Here
        </Navitem>{" "}
        , or under the <Bold>Help</Bold> tab at the top of the page.
      </P>
      <P>
        To begin, select the <Bold>File</Bold> heading.
      </P>
      <P>
        Either: create a <Bold>New Project</Bold>; or <Bold>Load</Bold> an
        existing file from your computer or the web.
      </P>
      <Title>Climatic Environment</Title>
      <P>
        Select the <Bold>Climatic Environment</Bold> tab and enter your
        information into each box. If you are modeling your building as a whole,
        specify one zone under <Bold>#Zones</Bold>; otherwise enter the number
        of different <Bold>zones</Bold>. For example: office space, restaurant,
        residential. Based on the location you have specified; appropriate
        climatic data will be referenced without additional input. You can
        adjust the <Bold>Yearly High</Bold> and <Bold>Yearly Low</Bold>{" "}
        temperatures manually if you wish.
      </P>
      <Title>Internal Operations</Title>
      <P>
        Select the <Bold>Internal Operations</Bold> tab. If you have specified
        more than one zone, select the <Bold>Zone</Bold> tabs in order and enter
        your information into each box. The <Bold>Floor Area</Bold> refers to
        the total conditioned (internal) floor area on all levels of each zone.
        Certain boxes will autofill with default values - but you can adjust
        these inputs manually if you wish.
      </P>
      <Title>External Envelope</Title>
      <P>
        Select the <Bold>External Envelope</Bold> tab. If you have specified
        more than one zone, select the <Bold>Zone</Bold> tabs in order and enter
        your information into each box.
      </P>
      <Title>Building Specifications</Title>

      <P>
        Select the <Bold>Building Specifications</Bold> tab. If you have
        specified more than one zone, select the <Bold>Zone</Bold> tabs in order
        and enter your information into each box. The construction specification
        is input in metric U-values: a simple conversion tool is provided to
        convert Imperial R-values into metric.
      </P>
      <Title>Results</Title>

      <P>
        Once all inputs are completed, select the <Bold>View</Bold> heading from
        the top bar to specify how you want the results displayed. The use of{" "}
        <Bold>Inputs/Results</Bold> view is recommended so that changes can be
        made on the inputs and results updated simultaneously.
      </P>
      <P>
        Select the <Bold>Results</Bold> heading from the top bar to select the
        display options for the results: for example, <Bold>Plots</Bold> and/or{" "}
        <Bold>Tables</Bold>.
      </P>
      <P>
        To download graphs or tables, click <Bold>Download Plot</Bold>. For the
        graphs, de-select any category you do not want displayed and select or
        de-select the "stacked" option based on how you want the results to be
        graphed. To download graphs or tables, click <Bold>Download Plot</Bold>.
        To save your project, go to the <Bold>File</Bold> heading and select{" "}
        <Bold>Save to Web</Bold>.
      </P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 120px 14vw 140px 14vw;
  min-height: 100vh;
  @media (max-width: 500px) {
    font-size: 22px;
    margin: 120px 8vw 140px 8vw;
  }
`;

const Iframe = styled.iframe`
  display: block;
  @media (max-width: 500px) {
    display: none;
  }
`;
const IframeMobile = styled.iframe`
  display: none;
  @media (max-width: 500px) {
    margin-top: -30px;
    display: block;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 40px;
  font-weight: bold;
  color: rgb(110, 175, 186);
  @media (max-width: 500px) {
    margin: 40px 2vw;
  }
`;

const H2 = styled.div``;
const P = styled.div`
  margin: 30px 0;
`;
const Bold = styled.span`
  font-weight: bold;
`;

const Ul = styled.ul``;
const Li = styled.li``;
const Navitem = styled(NavLink)`
  background: rgb(192, 252, 252);
  color: black;
  padding: 0px 5px 2px 5px;
  border-radius: 5px;
`;
