import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type ExperienceCardPropsType = {
  institution: string;
  position: string;
  period: string;
  certificateTitle: string;
  details: string;
};
export const ExperienceCard = ({
  institution,
  position,
  period,
  certificateTitle,
  details,
}: ExperienceCardPropsType) => {
  return (
    <StyledExperienceCard>
      <FlexWrapper justify="space-between">
        <Header>
          <Institution>{institution}</Institution>
          <FlexWrapper gap="20px">
            <Position>{position}</Position>
            <Period>{period}</Period>
          </FlexWrapper>
        </Header>
        <div>
          <CertificateTitle>{certificateTitle}</CertificateTitle>
          <Details>{details}</Details>
        </div>
      </FlexWrapper>
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled.article`
  background-color: ${theme.colors.cardBg};
  padding: 50px 40px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }

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
