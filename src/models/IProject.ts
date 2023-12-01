import { IProjectLanguages } from "./IProjectLanguages";

interface IProject {
  projectImg: string;
  projectName: string;
  projectDesc: string;
  isDeployed: boolean;
  projectLink: string;
  projectGHLink: string;
  projectLanguages: IProjectLanguages;
}

export default IProject;
