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
        <FlexWrapper justify="space-between" wrap="wrap">
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
        <IconWrapper>
          <Icon
            iconId={"arrowScroll"}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          />
        </IconWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 160px;

  @media ${theme.media.large} {
    padding-top: 100px;

    ${FlexWrapper}:first-child {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;

      ${FlexWrapper} {
        justify-content: center;
        margin-bottom: 80px;
      }
    }
  }

  @media ${theme.media.tablet} {
  }

  @media ${theme.media.mobile} {
    padding-top: 30px;
  }
`;

const Content = styled.div`
  height: 100%;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;

  @media ${theme.media.tablet} {
    font-size: 18px;
  }

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const Title = styled.h3`
  font-size: 72px;
  margin: 10px 0;
  background: ${theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media ${theme.media.tablet} {
    font-size: 60px;
  }

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
`;

const Description = styled.p`
  width: 514px;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 30px;

  @media ${theme.media.tablet} {
    margin-bottom: 20px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 16px;
    width: 350px;
  }
`;

const Photo = styled.img`
  width: 461px;
  height: 332px;
  object-fit: cover;
  margin-bottom: 98px;

  @media ${theme.media.tablet} {
    margin-bottom: 60px;
  }

  @media ${theme.media.mobile} {
    width: 324px;
    height: 233px;
  }
`;

const IconWrapper = styled.div`
  @media ${theme.media.mobile} {
    display: none;
  }
`;
