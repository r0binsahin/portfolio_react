interface IProject {
  projectImg: string;
  projectName: string;
  projectDesc: string;
  isDeployed: boolean;
  projectLink: string;
  projectGHLink: string;
  projectLanguages: string[];
}

export default IProject;
