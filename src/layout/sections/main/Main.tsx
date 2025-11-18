import { Icon } from "../../../components/icon/Icon";
import { ButtonLink } from "../../../components/buttonLink/ButtonLink";
import foto from "../../../assets/images/main_photo.png";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between">
          <Content>
            <MainTitle>WEB DEVELOPER</MainTitle>
            <Title>Hanna Alesik</Title>
            <Description>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Description>
            <FlexWrapper gap="25px" align="center">
            <ButtonLink link="#" title="Contact Me" />
            <ButtonLink link="#" title="Download CV" outlined />
            </FlexWrapper>
          </Content>
          <Photo src={foto} alt="" />
        </FlexWrapper>
        <Icon iconId={"arrowScroll"} width="32px" height="32px" viewBox="0 0 32 32" />
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 160px;
`;

const Content = styled.div`
  height: 100%;
`

const MainTitle = styled.h1`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 400;
`;

const Title = styled.h3`
  font-size: 72px;
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  width: 514px;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 30px;

`;

const Photo = styled.img`
  width: 461px;
  height: 332px;
  object-fit: cover;
  margin-bottom: 98px;
`;
