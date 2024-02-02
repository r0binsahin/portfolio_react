import { useContext } from "react";
import { LuGithub } from "react-icons/lu";

import "./DisplayOtherProjects.scss";

import { DataContext } from "../../context/DataContext";

export const DisplayOtherProjects = () => {
  const { otherProjects } = useContext(DataContext);

  return (
    <div className="otherProjectsContainer">
      {otherProjects.map((project) => (
        <div className="project">
          <p className="projectName">{project.otherProjectName}</p>
          <a href={project.otherProjectGHLink} target="_blank">
            <LuGithub />
          </a>
        </div>
      ))}
    </div>
  );
};
