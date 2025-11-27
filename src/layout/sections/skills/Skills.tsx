import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between" gap="60px 150px">
          <Skill iconId="javascriptSvg" title="javascript" />
          <Skill iconId="typescriptSvg" title="typescript" />
          <Skill iconId="mongoSvg" title="mongo bd" />
          <Skill iconId="postgresqlSvg" title="postgresql" />
          <Skill iconId="jestSvg" title="jest" />
          <Skill iconId="expressSvg" title="express" />
          <Skill iconId="nestjsSvg" title="nest js" />
          <Skill iconId="dockerSvg" title="dockerSvg" />
          <Skill iconId="reactjsSvg" title="react js" />
          <Skill iconId="reactnativeSvg" title="react native" />
          <Skill iconId="styledcomponentSvg" title="styled component" />
          <Skill iconId="reduxSvg" title="redux" />
          <Skill iconId="gitSvg" title="git" />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  @media ${theme.media.large} {

    ${FlexWrapper} {
      gap: 80px 45px;
      justify-content: center;
    }
  }
`;
