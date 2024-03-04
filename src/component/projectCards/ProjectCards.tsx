import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import IProject from "../../models/IProject";

import "./projectCards.scss";

export const ProjectCards = () => {
  const { projects } = useContext(DataContext);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setFlippedCards((prev) => {
      const newFlippedCards = [...prev];
      const cardIndex = newFlippedCards.indexOf(index);

      if (cardIndex === -1) {
        newFlippedCards.push(index);
      } else {
        newFlippedCards.splice(cardIndex, 1);
      }

      return newFlippedCards;
    });
  };

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="cardContainer">
        {projects.map((project: IProject, index: number) => (
          <div className="flipCard" onClick={() => handleClick(index)}>
            <div
              key={index}
              className={`flipCard__inner ${
                flippedCards.includes(index) ? "rotate" : ""
              }`}
            >
              <div className="flipCard__front">
                <img
                  className="flipCard__front__img"
                  src={project.projectImg}
                  alt="project image"
                />
              </div>
              <div className="flipCard__back">
                <div className="flipCard__back__wrapper">
                  <h2>{project.projectName}</h2>
                  <p className="projectDesc">{project.projectDesc}</p>
                  <div className="btnWrapper">
                    {project.isDeployed ? (
                      <button>
                        <a href={project.projectLink} target="_blank">
                          Try it
                        </a>
                      </button>
                    ) : null}
                    <button>
                      <a href={project.projectGHLink} target="_blank">
                        GitHub
                      </a>
                    </button>
                  </div>
                  <div className="langs">
                    {project.projectLanguages.map((lang: string) => (
                      <p>{lang}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
