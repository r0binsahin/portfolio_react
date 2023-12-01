import { createContext } from "react";
import { IMyData } from "../../models/IMyData";

export const DataContext = createContext<IMyData>({
  skills: [],
  projects: [],
  otherProjects: [],
});
