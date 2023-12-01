import IOtherProject from "./IOtherProject";
import IProject from "./IProject";
import ISkill from "./ISkill";

export interface IMyData {
  skills: ISkill[];
  projects: IProject[];
  otherProjects: IOtherProject[];
}
