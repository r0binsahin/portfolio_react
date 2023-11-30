import { useEffect, useState } from "react";
import ISkill from "../../models/ISkill";
import { getData } from "../../services/dataService";

import "./displaySkills.scss";

export const DisplaySkills = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    const setData = async () => {
      const skills = await getData("skills");
      setSkills(skills);
    };

    setData();
  }, []);

  return (
    <div className="skillsContainer">
      <h1>Skills</h1>
      <div className="skills">
        {" "}
        {skills.map((skill) => (
          <div className="skill">
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
