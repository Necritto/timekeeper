import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "components/PageTitle";
import UIInput from "components/UI/UIInput";
import Projects from "components/Projects";
import MainLayout from "layouts/main";
import { Container } from "styles/global";
import { RootState } from "store/types";
import { setProjectData } from "store/projects";
import { ProjectInterface } from "types/store/projectsReducer";

const MainPage: React.FC = () => {
  const [projectTitle, setProjectTitle] = React.useState("");

  const dispatch = useDispatch();
  const { projects } = useSelector((state: RootState) => state.projects);

  React.useEffect(() => {
    const newProject: ProjectInterface = {
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
          <UIInput setValue={setProjectTitle} />
          <Projects projects={projects} />
        </section>
      </Container>
    </MainLayout>
  );
};

export default MainPage;
