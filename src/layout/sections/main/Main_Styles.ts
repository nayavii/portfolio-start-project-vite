import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Link } from "react-scroll";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media ${theme.media.large} {
    padding-top: 130px;

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
`;

const Content = styled.div`
  height: 100%;
  text-align: left;

  @media ${theme.media.large} {
    text-align: center;
  }
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, FmaxSize: 20, FminSize: 16 })};

  p {
    display: none;
  }
`;

const Title = styled.h3`
  ${font({ weight: 700, FmaxSize: 72, FminSize: 40 })}
  margin: 10px 0;
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

  @media ${theme.media.mobile} {
    width: 100%;
  }
`;

const Photo = styled.img`
  height: 450px;
  object-fit: cover;

  @media ${theme.media.large} {
    margin-bottom: 100px;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 60px;
  }

  @media ${theme.media.mobile} {
    height: 300px;
  }
`;

const IconWrapper = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 100px;

  @media ${theme.media.large} {
    margin-top: 0;
  }

  bottom: 0;
  @media ${theme.media.mobile} {
    display: none;
  }
`;

export const S = {
  Main,
  Content,
  MainTitle,
  Title,
  Description,
  Photo,
  IconWrapper,
};
