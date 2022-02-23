import React from "react";

import { ProjectsInterface, ProjectInterface } from "types/store/projectsReducer";

import Project from "./Project";
import { ProjectWrapper } from "./styles";

const Projects: React.FC<ProjectsInterface> = ({ projects }) => {
  return (
    <ProjectWrapper>
      {projects.map((project: ProjectInterface, index: number) => {
        return <Project key={`project__${index}`} project={project} />;
      })}
    </ProjectWrapper>
  );
};

export default React.memo(Projects);
