import "./App.scss";
import { Resume } from "./component/resume/Resume";
import { IntroSection } from "./component/introSection/IntroSection";

import { Navbar } from "./component/navbar/Navbar";
import { DisplaySkills } from "./component/displaySkills/DisplaySkills";
import { DataContext } from "./context/DataContext";
import { getData } from "./services/dataService";
import { IMyData } from "./models/IMyData";
import { useEffect, useState } from "react";
import { ProjectCards } from "./component/projectCards/ProjectCards";
import { DisplayOtherProjects } from "./component/otherProjects/DisplayOtherProjects";

function App() {
  const [myData, setMyData] = useState<IMyData>({
    skills: [],
    projects: [],
    otherProjects: [],
  });

  const setData = async () => {
    const myData: IMyData = await getData();

    setMyData(myData);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      <DataContext.Provider value={myData}>
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
