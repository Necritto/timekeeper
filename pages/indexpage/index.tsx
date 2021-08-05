import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "components/PageTitle";
import CustomInput from "components/CustomInput";
import MainLayout from "layouts/main";
import { Container } from "styles/global";
import { RootState } from "store/types";
import { setProjectData } from "store/projects";
import Stopwatch from "components/Stopwatch";

const MainPage: React.FC = () => {
  const [projectTitle, setProjectTitle] = React.useState("");

  const dispatch = useDispatch();
  const { projects } = useSelector((state: RootState) => state.projects);

  console.log(projects);

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
          <Stopwatch />
          <ol>
            {projects.map((project) => {
              return (
                <li key={project.title + Date.now()}>
                  {project.title} <span>{project.workedTime}</span>
                </li>
              );
            })}
          </ol>
        </section>
      </Container>
    </MainLayout>
  );
};

export default MainPage;
