import "./App.scss";
import { Resume } from "./component/resume/Resume";
import { IntroSection } from "./component/introSection/IntroSection";

import { Navbar } from "./component/navbar/Navbar";
import { DisplaySkills } from "./component/displaySkills/DisplaySkills";
import { DataContext } from "./component/context/DataContext";
import { getData } from "./services/dataService";
import { IMyData } from "./models/IMyData";
import { useEffect, useState } from "react";

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
  }, [setData]);

  return (
    <>
      <DataContext.Provider value={myData}>
        <Navbar />
        <IntroSection />
        <DisplaySkills />
        <Resume />
      </DataContext.Provider>
    </>
  );
}

export default App;
