import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Description>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </Description>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const Description = styled.p`
  width: 843px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 4%;
  padding-left: 20px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 100%;
    left: 0;
    width: 5px;
    border-radius: 2px;
    background: ${theme.colors.gradient};
  }
`;
