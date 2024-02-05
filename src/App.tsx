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
import { Footer } from "./component/footer/Footer";

const myProjectData: IMyData = data.mydata;

function App() {
  return (
    <>
      <DataContext.Provider value={myProjectData}>
        <Navbar />
        <div className="container">
          <IntroSection />
          <DisplaySkills />
          <Resume />
          <ProjectCards />
          <DisplayOtherProjects />
        </div>
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
