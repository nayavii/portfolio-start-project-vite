import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import projectImage from "../../../assets/images/project_image.png";
import { Menu } from "../../../components/menu/Menu";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

// const tabsName = ["All", "Landing page", "React", "SPA"];

const projects = [
  {
    category: "Landing page",
    title: "TITLE PROJECT 1",
    projectImage: "../../../assets/images/project_image.png",
    tags: ["React", "TypeScript", "CSS"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    category: "React",
    title: "TITLE PROJECT 2",
    projectImage: "Student",
    tags: ["React", "TypeScript", "CSS"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const tabsName = projects.map((item) => item.category);

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <MenuWrraper>
          <Menu menuItems={tabsName} justify="center" gap="40px" />
        </MenuWrraper>

        <FlexWrapper justify="space-between">
          {projects.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              tags={item.tags}
              imageSrc={projectImage}
              description={item.description}
            />
          ))}
          {/* <Project
            title="TITLE PROJECT"
            tags={projectTags}
            imageSrc={projectImage}
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          /> */}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const MenuWrraper = styled.div`
  margin-bottom: 25px;

  ul li a {
    color: ${theme.colors.text};
    font-weight: 400;
  }
`;
