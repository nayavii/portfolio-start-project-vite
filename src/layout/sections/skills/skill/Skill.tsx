import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = ({ iconId, title }: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
      <SkillTitle>{title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 120px;
`;

const SkillTitle = styled.h3`
  font-weight: 400;
  letter-spacing: 13.54%;
  text-align: center;
  text-transform: uppercase;
  margin-top: 22px;
`;
