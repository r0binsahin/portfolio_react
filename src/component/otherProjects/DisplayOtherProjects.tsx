import { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";

import "./DisplayOtherProjects.scss";

import { DataContext } from "../../context/DataContext";

export const DisplayOtherProjects = () => {
  const { otherProjects } = useContext(DataContext);

  return (
    <div className="otherProjectsContainer">
      <h1>Other Projects</h1>
      <div className="projects">
        {otherProjects.map((project) => (
          <div className="project">
            <p className="projectName">{project.otherProjectName}</p>
            <a href={project.otherProjectGHLink} target="_blank">
              <FaGithubSquare size={30} color="#fff" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
