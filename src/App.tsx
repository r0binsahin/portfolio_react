import "./App.scss";

import { DataContext } from "./context/DataContext";
import { IMyData } from "./models/IMyData";

import { Navbar } from "./component/navbar/Navbar";
import { IntroSection } from "./component/introSection/IntroSection";
import { DisplaySkills } from "./component/displaySkills/DisplaySkills";
import { Resume } from "./component/resume/Resume";
import { ProjectCards } from "./component/projectCards/ProjectCards";
import { DisplayOtherProjects } from "./component/otherProjects/DisplayOtherProjects";

import data from "./assets/data/data.json";

const myProjectData: IMyData = data.mydata;

function App() {
  return (
    <>
      <DataContext.Provider value={myProjectData}>
        <Navbar />
        <IntroSection />
        <DisplaySkills />
        <Resume />
        <ProjectCards />
        <DisplayOtherProjects />
      </DataContext.Provider>
    </>
  );
}

export default App;
