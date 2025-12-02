import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import React from "react";
import { Fade } from "react-awesome-reveal";

const skillsData = [
  { iconId: "htmlSvg", title: "html" },
  { iconId: "cssSvg", title: "css" },
  { iconId: "javascriptSvg", title: "javascript" },
  { iconId: "typescriptSvg", title: "typescript" },
  { iconId: "mongoSvg", title: "mongo bd" },
  { iconId: "postgresqlSvg", title: "postgresql" },
  { iconId: "jestSvg", title: "jest" },
  { iconId: "nestjsSvg", title: "nest js" },
  { iconId: "dockerSvg", title: "docker" },
  { iconId: "reactjsSvg", title: "react js" },
  { iconId: "reactnativeSvg", title: "react native" },
  { iconId: "styledcomponentSvg", title: "styled component" },
  { iconId: "reduxSvg", title: "redux" },
  { iconId: "gitSvg", title: "git" },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between" gap="60px 150px">
          <Fade cascade damping={0.1} triggerOnce>
            {skillsData.map(({ iconId, title }, index) => (
              <Skill key={index} iconId={iconId} title={title} />
            ))}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
