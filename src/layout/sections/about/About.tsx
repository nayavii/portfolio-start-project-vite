import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify="space-between" gap="20px">
          <Photo></Photo>
          <ContentWrapper>
        <SectionTitle>About me</SectionTitle>
            <FlexWrapper gap="12px">
              <Language>Russian - Native</Language>
              <Language>English - B2</Language>
              <Language>Spanish - B2</Language>
            </FlexWrapper>
            <Description>
              The long barrow was built on land previously inhabited in the
              Mesolithic period. It consisted of a sub-rectangular earthen
              tumulus, estimated to have been 15 metres (50 feet) in length,
              with a chamber built from sarsen megaliths on its eastern end.
              Both inhumed and cremated human remains were placed within this
              chamber during the Neolithic period, representing at least nine or
              ten individuals.
            </Description>
          </ContentWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const Photo = styled.div`
  background-color: aliceblue;
  min-width: 300px;
  min-height: 200px;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 10px 0 10px 20px;
  height: 100%;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 80%;
    bottom: 0;
    left: 0;
    width: 5px;
    border-radius: 2px;
    background: ${theme.colors.gradient};
  }
`;
const Language = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  background: ${theme.colors.gradient};
  border-radius: 6px;
  color: ${theme.colors.bg};
 
`;

const Description = styled.p`
  /* width: 843px; */
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 4%;
  margin-top: 15px;
`;
