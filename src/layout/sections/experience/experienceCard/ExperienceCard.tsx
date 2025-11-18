import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

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
`;

const Header = styled.div`
  height: 100%;
`;

const Institution = styled.h3`
  margin-bottom: 25px;
`;

const Position = styled.span`
  font-size: 15px;
  line-height: 24px;
`;

const Period = styled.span`
  font-size: 12px;

  padding: 8px 16px;
  background: ${theme.colors.gradient};
  border-radius: 6px;
  color: ${theme.colors.bg};
`;

const CertificateTitle = styled.h3`
  margin-bottom: 25px;
`;

const Details = styled.p`
  font-size: 15px;
  line-height: 24px;
  width: 600px;
`;
