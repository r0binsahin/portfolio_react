import { useContext } from "react";

import { PiGithubLogo } from "react-icons/pi";
import "./DisplayOtherProjects.scss";

import { DataContext } from "../../context/DataContext";

export const DisplayOtherProjects = () => {
  const { otherProjects } = useContext(DataContext);

  return (
    <div className="otherProjectsContainer">
      <h1>Other Projects</h1>
      <div className="projects">
        {otherProjects.map((project, index) => (
          <a href={project.otherProjectGHLink} target="_blank" key={index}>
            <div className="project">
              <p className="projectName">{project.otherProjectName}</p>

              <PiGithubLogo size={30} color="#fff" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
