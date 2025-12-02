import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Menu } from "../../../components/menu/Menu";
import { Container } from "../../../components/Container";
import { projects } from "./projectsData";
import React, { useState } from "react";
import { S } from "./Projects_Styles";
import { Slider } from "../../../components/slider/Slider";
import { AnimatePresence, motion } from "motion/react";

const uniqueCategories = Array.from(
  new Set(
    projects
      .map((item) => item.category)
      .filter((category): category is string => typeof category === "string")
  )
);

const tabsName = [
  { title: "All", status: "all" },
  ...uniqueCategories.map((category) => ({
    title: category,
    status: category.toLowerCase(),
  })),
];

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  const filteredProjects =
    currentFilterStatus === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === currentFilterStatus
        );

  console.log(currentFilterStatus);
  console.log(filteredProjects);

  const handleFilterChange = (status: string) => {
    setCurrentFilterStatus(status);
  };

  const projectsItems = filteredProjects.map((item, index) => (
    <S.ProjectWrapper key={index}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Project
          title={item.title}
          tags={item.tags}
          imageSrc={item.projectImage}
          description={item.description}
        />
      </motion.div>
    </S.ProjectWrapper>
  ));

  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <S.MenuWrapper>
          <Menu
            tabsItems={tabsName}
            justify="center"
            gap="40px"
            handleFilterChange={handleFilterChange}
            currentFilterStatus={currentFilterStatus}
          />
        </S.MenuWrapper>
        <AnimatePresence>
          <Slider items={projectsItems} />
        </AnimatePresence>
      </Container>
    </S.Projects>
  );
};
