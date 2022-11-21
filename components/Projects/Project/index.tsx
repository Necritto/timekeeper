import React from "react";
import { useDispatch } from "react-redux";

import { setWorkedTime } from "store/projects";
import Stopwatch from "components/Stopwatch";
import { ProjectInterface } from "types/store/projectsReducer";

import { ProjectItem, ProjectTitle } from "./styles";

type PropTypes = {
  project: ProjectInterface;
};

const Project: React.FC<PropTypes> = ({ project: { _id, title, workedTime } }) => {
  const dispatch = useDispatch();

  const updateProjectTimer = React.useCallback(
    (timer: number) => {
      dispatch(setWorkedTime({ _id, workedTime: timer }));
    },
    [_id, dispatch],
  );

  return (
    <ProjectItem>
      <ProjectTitle>{title}</ProjectTitle>
      <Stopwatch workedTime={workedTime} updateProjectTimer={updateProjectTimer} />
    </ProjectItem>
  );
};

export default React.memo(Project);
