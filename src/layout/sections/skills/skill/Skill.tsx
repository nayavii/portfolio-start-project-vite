import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = ({ iconId, title }: SkillPropsType) => {
  return (
    <StyledSkill>
      <StyledIcon iconId={iconId} />
      <SkillTitle>{title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    min-width: 135px;
    max-width: 100%;
  }
`;

const SkillTitle = styled.h3`
  font-weight: 400;
  letter-spacing: 13.54%;
  text-align: center;
  text-transform: uppercase;
  margin-top: 22px;

  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 120px;
  height: 120px;

  @media ${theme.media.mobile} {
    width: 90px;
    height: 90px;
  }
`;
