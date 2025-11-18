import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ExperienceCard } from "./experienceCard/ExperienceCard";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

const workExperiences = [
  {
    institution: "University of Toronto",
    position: "Student",
    period: "Jan 1999 - Dec 2003",
    certificateTitle: "Certificate of Web Training",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et ",
  },

  {
    institution: "University of Toronto",
    position: "Student",
    period: "Jan 1999 - Dec 2003",
    certificateTitle: "Certificate of Web Training",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et ",
  },
];

type ExperiencePropsType = {
  title: string;
};

export const Experience = ({ title }: ExperiencePropsType) => {
  return (
    <StyledExperience>
      <Container>
        <ExperienceWrapper >
          <SectionTitle>{title}</SectionTitle>
          {workExperiences.map((item, index) => (
            <ExperienceCard
              key={index}
              institution={item.institution}
              position={item.position}
              period={item.period}
              certificateTitle={item.certificateTitle}
              details={item.details}
            />
          ))}
        </ExperienceWrapper>
      </Container>
    </StyledExperience>
  );
};

const StyledExperience = styled.section``;

const ExperienceWrapper = styled.div``;
