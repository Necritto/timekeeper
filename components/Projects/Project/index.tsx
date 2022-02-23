import React from "react";

import Stopwatch from "components/Stopwatch";
import { ProjectInterface } from "types/store/projectsReducer";

import { ProjectItem, ProjectTitle } from "./styles";

type PropTypes = {
  project: ProjectInterface;
};

const Project: React.FC<PropTypes> = ({ project }) => {
  return (
    <ProjectItem>
      <ProjectTitle>{project.title}</ProjectTitle>
      <Stopwatch />
    </ProjectItem>
  );
};

export default React.memo(Project);
