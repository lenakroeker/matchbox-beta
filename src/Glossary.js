import React from "react";
import styled, { keyframes } from "styled-components";

export default function Glossary() {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
      <Title>Glossary</Title>

      <ListDiv>
        <List>
          <List1>
            <Li>
              <Link href="#Air-Exchange-Volume">Air Exchange Volume</Link>
            </Li>
            <Li>
              <Link href="#Air-exposed-area">Air exposed area</Link>
            </Li>
            <Li>
              <Link href="#Air/person">Air/person</Link>
            </Li>
            <Li>
              <Link href="#Annual-Energy-Loads">Annual Energy Loads</Link>
            </Li>
            <Li>
              <Link href="#Building-Type">Building Type</Link>
            </Li>
            <Li>
              <Link href="#Casual-Gains">Casual Gains</Link>
            </Li>
            <Li>
              <Link href="#Coefficient-of-Performance">
                Coefficient of Performance (COP)
              </Link>
            </Li>
            <Li>
              <Link href="#Cooling-Load">Cooling Load</Link>
            </Li>
            <Li>
              <Link href="#EUI">Energy Use Intensity (EUI)</Link>
            </Li>
            <Li>
              <Link href="#External-Envelope">External Envelope</Link>
            </Li>
            <Li>
              <Link href="#External-Wall/Elevation">
                External Wall/Elevation
              </Link>
            </Li>
            <Li>
              <Link href="#Fabric-Thermal-Losses/Gains">
                Fabric Thermal Losses/Gains
              </Link>
            </Li>
            <Li>
              <Link href="#Floors">Floors</Link>
            </Li>
          </List1>
          <List2>
            <Li>
              <Link href="#Gross-EUI">Gross EUI</Link>
            </Li>
            <Li>
              <Link href="#Ground-Exposed-Area">Ground Exposed Area</Link>
            </Li>
            <Li>
              <Link href="#Ground-Temperature">Ground Temperature</Link>
            </Li>
            <Li>
              <Link href="#Heating-Load">Heating Load</Link>
            </Li>
            <Li>
              <Link href="#Heat/person">Heat/person</Link>
            </Li>
            <Li>
              <Link href="#Heat-Recovery-Ventilator-(HRV)">
                Heat Recovery Ventilator (HRV)
              </Link>
            </Li>
            <Li>
              <Link href="#Heat-Transfer-Coefficient">
                Heat Transfer Coefficient
              </Link>
            </Li>
            <Li>
              <Link href="#HRV-Efficiency">HRV Efficiency</Link>
            </Li>
            <Li>
              <Link href="#Infiltration">Infiltration</Link>
            </Li>
            <Li>
              <Link href="#Light Loads">Light Loads</Link>
            </Li>
            <Li>
              <Link href="#Mean-High-Temperature">Mean High Temperature</Link>
            </Li>

            <Li>
              <Link href="#Mean-Low-temperature">Mean Low temperature</Link>
            </Li>
            <Li>
              <Link href="#Net-EUI">Net EUI</Link>
            </Li>
          </List2>
          <List3>
            <Li>
              <Link href="#Population">Population</Link>
            </Li>
            <Li>
              <Link href="#Plug-Loads">Plug Loads</Link>
            </Li>
            <Li>
              <Link href="#Roof-Area">Roof Area</Link>
            </Li>
            <Li>
              <Link href="#Rooflight">Rooflight</Link>
            </Li>
            <Li>
              <Link href="#RSI">RSI</Link>
            </Li>
            <Li>
              <Link href="#R-Value">R-Value</Link>
            </Li>
            <Li>
              <Link href="#Solar-Heat-Gain-Coefficient">
                Solar Heat Gain Coefficient
              </Link>
            </Li>
            <Li>
              <Link href="#Solar-Gains">Solar Gains</Link>
            </Li>
            <Li>
              <Link href="#Ventilation-Load">Ventilation Load</Link>
            </Li>
            <Li>
              <Link href="#Zone-Area">Zone Area</Link>
            </Li>
            <Li>
              <Link href="#Zones">Zones</Link>
            </Li>
          </List3>
        </List>
      </ListDiv>
      <InfoDiv>
        <InfoCard>
          <A id="Air-Exchange-Volume"></A>
          <InfoItem>Air Exchange Volume</InfoItem>
          <InfoP>
            The volumetric flow of outdoor air supplied based on ventilation
            requirements.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Air-exposed-area"></A>
          <InfoItem>Air exposed area</InfoItem>
          <InfoP>
            The part of the building envelope exposed to the outdoor elements.
            In the case of floors, the area of a floor or floors cantilevered
            above the ground.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Air/person"></A>
          <InfoItem>Air/person</InfoItem>
          <InfoP>
            the volumetric flow of outdoor air supplied per person for
            ventilation requirements.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Annual-Energy-Loads"></A>
          <InfoItem>Annual Energy Loads</InfoItem>
          <InfoP>
            The energy required on an annual basis to maintain a building's
            internal environmental conditions for health and comfort.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Building Type"></A>
          <InfoItem>Building Type</InfoItem>
          <InfoP>
            A classification of buildings by use and occupancy type.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Casual-Gains"></A>
          <InfoItem>Casual Gains</InfoItem>
          <InfoP>
            The internal heat gains that are a result of the given conditions of
            use, including plug loads, light loads, heat generated by occupants.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Coefficient-of-Performance"></A>
          <InfoItem>Coefficient of Performance (COP)</InfoItem>
          <InfoP>
            The COP is a measure of the amount of power input to a system
            compared to the amount of power output by that system. The COP is
            therefore a measurement of efficiency; the higher the number, the
            more efficient the system is. The COP is dimensionless because the
            input power and output power are measured in Watts.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Cooling-Load"></A>
          <InfoItem>Cooling Load</InfoItem>
          <InfoP>
            The amount of thermal energy needed to prevent overheating of the
            building interior.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="EUI"></A>
          <InfoItem>Energy Use Intensity (EUI)</InfoItem>
          <InfoP>
            The EUI is the buildings annual energy use expressed as a function
            of a building's total area or "footprint". It is calculated by
            dividing the total energy consumed in a one year period (expressed
            in kilowatt-hours or kilo-British Thermal Units) by the total gross
            internal area of the building.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="External-Envelope"></A>
          <InfoItem>External Envelope</InfoItem>
          <InfoP>
            The assembly separating the building interior from external
            environment.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="External-Wall/Elevation"></A>
          <InfoItem>External Wall/Elevation</InfoItem>
          <InfoP>
            The external wall of a building defined by the direction it faces.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Fabric-Losses/Gains"></A>
          <InfoItem>Fabric Losses/Gains</InfoItem>
          <InfoP>
            The conductive flow of thermal energy through the external envelope
            - expressed as either heat loss or heat gain.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Floors"></A>
          <InfoItem>Floors</InfoItem>
          <InfoP>The number of levels/storeys of a building.</InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Gross-EUI"></A>
          <InfoItem>Gross EUI</InfoItem>
          <InfoP>
            The Gross EUI is the annual energy "delivered" by the building
            systems to meet the needs of the building, expressed as a function
            of the buildings total area (footprint). This incorporates the gross
            thermal energy - which can be produced by different mechanical
            building systems-- i.e. heat pump, boiler, district energy, etc -
            which ultimately consume different amounts of primary energy
            (electricity, natural gas, etc) to deliver the same quantities of
            thermal energy. This is due to different efficiencies of mechanical
            plant (see COP).
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Ground-Exposed-Area"></A>
          <InfoItem>Ground Exposed Area</InfoItem>
          <InfoP>
            The area of a building in direct contact with the ground.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Ground-Temperature"></A>
          <InfoItem>Ground Temperature</InfoItem>
          <InfoP>
            The temperature of the ground at a depth below where seasonal or
            daily fluctuations take place.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Heating-Load"></A>
          <InfoItem>Heating Load</InfoItem>
          <InfoP>
            The amount of thermal heat energy required to maintain a building's
            internal environment within conditions of human health and comfort.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Heat/person"></A>
          <InfoItem>Heat/person</InfoItem>
          <InfoP>
            The human metabolic heat emitted dependent upon activity.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Heat-Recovery-Ventilator-(HRV)"></A>
          <InfoItem>Heat Recovery Ventilator (HRV)</InfoItem>
          <InfoP>
            A ventilator that recovers thermal energy (heat and cooling) from
            the exhaust air to transfer the thermal energy to the incoming
            supply air. An HRV can work effectively in both modes of heating and
            cooling.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Heat-Transfer-Coefficient"></A>
          <InfoItem>Heat Transfer Coefficient</InfoItem>
          <InfoP>Thermal property of a building envelope assembly:</InfoP>
          <InfoP>Metric units:</InfoP>
          <InfoP>
            Thermal conductivity: U-value (SI) measured in metric units (Watts
            per m² per Kelvin - W/m².K). Thermal resistance: RSI Kelvin square
            meters per Watt (K. m²/W)
          </InfoP>
          <InfoP>Imperial units:</InfoP>
          <InfoP>
            Thermal resistance: R-value units = RSI * 5.6786: (°F.sqft.h/BTU)
            Thermal conductivity: U-value (Imp) = 1/R units: BTU per hour per
            square foot per °F (BTU/h/sqft/°F)
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="HRV-Efficiency"></A>
          <InfoItem>HRV Efficiency</InfoItem>
          <InfoP>
            The proportion of thermal energy that a Heat (or Cool) Recovery
            Ventilator can recover expressed as a percent.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Infiltration"></A>
          <InfoItem>Infiltration</InfoItem>
          <InfoP>
            The movement of external air into a building through the building
            fabric. Typical infiltration rates are as follows:
          </InfoP>
          <Table>
            <Tr>
              <Th></Th>
              <Th>Single family house</Th>
              <Th>4-story condos</Th>
              <Th>5-story office</Th>
              <Th>Large grocery store</Th>
            </Tr>
            <Tr>
              <Td>Area (footprint)</Td>
              <Td>100 m²</Td>
              <Td>500 m²</Td>
              <Td>1,000 m²</Td>
              <Td>8,000 m²</Td>
            </Tr>
            <Tr>
              <Td>Height (ground floor to roof) </Td>
              <Td>6 m</Td>
              <Td>16 m </Td>
              <Td>25 m</Td>
              <Td>10 m</Td>
            </Tr>
            <Tr>
              <Td>Internal volume</Td>
              <Td>600 m³</Td>
              <Td>8,000 m³ </Td>
              <Td>25,000 m³ </Td>
              <Td>80,000 m³</Td>
            </Tr>
            <Tr>
              <Td>Air Change Rate</Td>
              <Td>1 </Td>
              <Td>0.5</Td>
              <Td>0.25</Td>
              <Td>0.1</Td>
            </Tr>
          </Table>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Lighting-Loads"></A>
          <InfoItem>Lighting Loads</InfoItem>
          <InfoP>
            The amount of energy required for artificial lighting. Typical
            lighting loads for building types are as follows:
          </InfoP>
          <InfoList>
            <InfoListItem>Residential: 5 W/m²</InfoListItem>
            <InfoListItem>Office: 12 W/m²</InfoListItem>
            <InfoListItem>Retail: 20-30 W/m²</InfoListItem>
            <InfoListItem>Education: 10 W/m²</InfoListItem>
          </InfoList>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Mean-High-Temperature"></A>
          <InfoItem>Mean High Temperature</InfoItem>
          <InfoP>
            The highest external temperature at a given place and time as a
            statistical mean.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Mean-Low-temperature"></A>
          <InfoItem>Mean Low temperature</InfoItem>
          <InfoP>
            The lowest external temperature at a given place and time as a
            statistical mean.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Net-EUI"></A>
          <InfoItem>Net EUI</InfoItem>
          <InfoP>
            The Net EUI is the actual energy consumed by the building's energy
            supply systems - for example, the annual natural gas and electricity
            meter readings - combined as a function of the a building's total
            area (footprint). This is the most commonly used EUI number in
            reporting a building's performance.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Plug-Loads"></A>
          <InfoItem>Plug Loads</InfoItem>
          <InfoP>
            The energy required to power electrical appliances and machinery.
            Typical plug loads for building types are as follows:
          </InfoP>
          <InfoList>
            <InfoListItem>Residential: 8 W/m²</InfoListItem>
            <InfoListItem>Office: 15-20 W/m²</InfoListItem>
            <InfoListItem>Retail: 30-40 W/m²</InfoListItem>
            <InfoListItem>Education: 15-20 W/m²</InfoListItem>
          </InfoList>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Population"></A>
          <InfoItem>Population</InfoItem>
          <InfoP>The number of people occupying a building.</InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Roof-Area"></A>
          <InfoItem>Roof Area</InfoItem>
          <InfoP>
            The area of a building's roof that represents a thermal envelope.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Rooflight"></A>
          <InfoItem>Rooflight</InfoItem>
          <InfoP>A glazed opening in the roof also called a skylight.</InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="RSI"></A>
          <InfoItem>RSI</InfoItem>
          <InfoP>
            Thermal resistivity as measured in imperial units. It is the ratio
            of the temperature difference across an insulated assembly and the
            transfer of heat per unit area per unit time. A higher R-value
            expresses better insulating properties. Kelvin square meters per
            Watt (K. m²/W).
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="R-value"></A>
          <InfoItem>R-value</InfoItem>
          <InfoP>
            Thermal resistivity as measured in imperial units. It is the ratio
            of the temperature difference across an insulated assembly and the
            transfer of heat per unit area per unit time. A higher R-value
            expresses better insulating properties. (°F.sqft.h/BTU)
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Solar-Gains"></A>
          <InfoItem>Solar Gains</InfoItem>
          <InfoP>
            The heat gained in a building caused by solar radiation through
            windows and roof lights.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Solar-Heat-Gain-Coefficient"></A>
          <InfoItem>Solar Heat Gain Coefficient</InfoItem>
          <InfoP>
            Refers to the solar energy transmittance of glass or of a glazed
            assembly. Solar Heat Gain Coefficient (SHGC) values range from 0 to
            1, a lower value representing less solar gain. This property of the
            solar energy transmittance of glass might also be expressed as the
            Shading Coefficient. Solar Heat Gain Coefficient = 0.87 X the
            Shading Coefficient.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Ventilation-Load"></A>
          <InfoItem>Ventilation Load</InfoItem>
          <InfoP>
            The energy required to warm (or cool) the required volumes of
            outdoor air (OA) to ensure that indoor air quality (IAQ) of the
            building is maintained at healthy levels and free of contaminants,
            such as CO2, odours, moisture, etc. The typical volumes of outdoor
            air are around 10-12 litres per second per person (equivalent to
            20-25 cubic feet per minute per person). Note: this is to
            distinguish it from the energy required to power ventilation
            equipment OR the volume of air required for a given population-
            activity).
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Zones"></A>
          <InfoItem>Zones</InfoItem>
          <InfoP>
            The areas of a building which have a related use and occupancy type.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
        <InfoCard>
          <A id="Zone-Area"></A>
          <InfoItem>Zone Area</InfoItem>
          <InfoP>
            The total conditioned (internal) floor area of the building on all
            levels - specifically includes all floor areas that are enclosed by
            a thermal envelope.
          </InfoP>
          <ToTop onClick={() => toTop()}>To Top</ToTop>
        </InfoCard>
      </InfoDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 120px 14vw 50px 14vw;
  min-height: 100vh;
  @media (max-width: 1000px) {
    margin: 150px 8vw 50px 8vw;
    font-size: 22px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 40px 0 40px 23vw;
  width: 300px;
  text-align: center;
  font-weight: bold;
  color: rgb(110, 175, 186);
  @media (max-width: 600px) {
    margin: 40px auto;
  }
`;
const List = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`;
const List1 = styled.ul``;
const List2 = styled.ul``;
const List3 = styled.ul``;

const ListDiv = styled.div`
  height: auto;
`;

const A = styled.a`
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
`;

const Li = styled.li`
  margin: 5px 0;
`;

const Link = styled.a`
  color: black;
`;
const InfoDiv = styled.div``;

const InfoCard = styled.div`
  margin: 30px 0;
`;
const InfoItem = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgb(110, 175, 186);
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;
const InfoP = styled.div``;
const ToTop = styled.div`
  cursor: pointer;
  text-decoration: underline;
  margin-top: 20px;
`;

const Table = styled.table`
  @media (max-width: 500px) {
    width: 60%;
    margin-left: -8vw;
    margin-top: 30px;
    font-size: 18px;
  }
`;
const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  @media (max-width: 500px) {
    padding: 1px;
  }
`;
const Tr = styled.tr``;
const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  @media (max-width: 500px) {
    padding: 1px;
  }
`;
const InfoList = styled.ul``;
const InfoListItem = styled.li``;
