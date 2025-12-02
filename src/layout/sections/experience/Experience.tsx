import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ExperienceCard } from "./experienceCard/ExperienceCard";
import { Container } from "../../../components/Container";
import { studyExperiences, workExperiences } from "./expirienceData";
import React from "react";
import { Fade } from "react-awesome-reveal";

type ExperiencePropsType = {
  title: string;
};

export const Experience: React.FC<ExperiencePropsType> = ({
  title,
}: ExperiencePropsType) => {
  return (
    <StyledExperience>
      <Container>
        <ExperienceWrapper>
          <SectionTitle>{title}</SectionTitle>
          <Fade cascade damping={0.1} triggerOnce>
            {(title === "Education" ? studyExperiences : workExperiences).map(
              (item, index) => (
                <ExperienceCard
                  key={index}
                  institution={item.institution}
                  position={item.position}
                  period={item.period}
                  certificateTitle={item.certificateTitle}
                  details={item.details}
                />
              )
            )}
          </Fade>
        </ExperienceWrapper>
      </Container>
    </StyledExperience>
  );
};

const StyledExperience = styled.section``;

const ExperienceWrapper = styled.div`

div + div {
  margin-top: 20px;
}

`;
