import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";

// Experience Card Styles

const ExperienceCard = styled.article`
  background-color: ${theme.colors.cardBg};
  padding: 50px 40px;

  @media screen and (max-width: 993px) {
    ${FlexWrapper}:first-child {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media ${theme.media.mobile} {
    padding: 30px;
  }
`;

const Header = styled.div`
  height: 100%;
`;

const Institution = styled.h3`
  margin-bottom: 25px;
`;

const Position = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

const Period = styled.span`
  ${font({ FmaxSize: 12, FminSize: 10, color: theme.colors.bg })}
  padding: 8px 16px;
  background: ${theme.colors.gradient};
  border-radius: 6px;
`;

const CertificateTitle = styled.h3`
  margin-bottom: 25px;
`;

const Details = styled.p`
  font-size: 16px;
  line-height: 24px;
  width: 600px;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`;

export const S = {
  ExperienceCard,
  Header,
  Institution,
  Position,
  Period,
  CertificateTitle,
  Details,
};
