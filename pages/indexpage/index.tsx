import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "components/PageTitle";
import CustomInput from "components/CustomInput";
import MainLayout from "layouts/main";
import { Container } from "styles/global";
import { RootState } from "store/types";
import { setProjectData } from "store/projects";
import Stopwatch from "components/Stopwatch";

import { ProjectWrapper, Project, ProjectTitle } from "./styles";

const MainPage: React.FC = () => {
  const [projectTitle, setProjectTitle] = React.useState("");

  const dispatch = useDispatch();
  const { projects } = useSelector((state: RootState) => state.projects);

  React.useEffect(() => {
    const newProject = {
      title: projectTitle,
      workedTime: "",
    };

    if (!!projectTitle) {
      dispatch(setProjectData(newProject));
    }
  }, [dispatch, projectTitle]);

  return (
    <MainLayout>
      <PageTitle title="Timekeeper | Home page" />
      <Container>
        <h1>Timekeeper</h1>
        <section>
          <CustomInput setProjectTitle={setProjectTitle} />
          <ProjectWrapper>
            {projects.map((project, index) => {
              return (
                <Project key={`project__${index}`}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <Stopwatch />
                </Project>
              );
            })}
          </ProjectWrapper>
        </section>
      </Container>
    </MainLayout>
  );
};

export default MainPage;
