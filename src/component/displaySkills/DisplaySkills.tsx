import { useContext } from "react";

import "./displaySkills.scss";
import { DataContext } from "../../context/DataContext";

export const DisplaySkills = () => {
  const { skills } = useContext(DataContext);

  return (
    <div className="skillsContainer">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="icon">
              <img src={skill.skillsImg} alt={skill.skillsName} />
            </div>
            <p className="title">{skill.skillsName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
