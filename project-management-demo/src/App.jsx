import { useState } from "react";

import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

import noProjectImage from "./assets/no-projects.png";
import SelectedProject from "./components/SelectedProject";

const PROJECTS = {
  selectedProjectId: undefined,
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(PROJECTS);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleOnSaveAddProject(title, description, date) {
    if (title && description && date) {
      setProjectsState((prevProjects) => {
        return {
          ...prevProjects,
          selectedProjectId: undefined,
          projects: [
            ...prevProjects.projects,
            {
              id: crypto.randomUUID(),
              title: title,
              description: description,
              dueDate: date,
              tasks: [],
            },
          ],
        };
      });
    }
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevProjects) => {
      return {
        selectedProjectId: undefined,
        projects: prevProjects.projects.filter((project) => project.id !== id),
      };
    });
  }

  function handleAddTask(taskText) {
    setProjectsState((prevProjects) => {
      const newTask = {
        id: crypto.randomUUID(),
        text: taskText,
      };

      const updatedProjects = prevProjects.projects.map((project) => {
        if (project.id === prevProjects.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }
        return project;
      });

      return {
        ...prevProjects,
        projects: [...updatedProjects],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevProjects) => {
      const updatedProjects = prevProjects.projects.map((project) =>
        project.id === prevProjects.selectedProjectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== id),
            }
          : project
      );

      return {
        ...prevProjects,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSave={handleOnSaveAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        noProjectImage={noProjectImage}
        onStartAddProject={handleStartAddProject}
      />
    );
  }

  return (
    <>
      <Header />
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
