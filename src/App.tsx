import "./App.scss";
import { Resume } from "./component/resume/Resume";
import { IntroSection } from "./component/introSection/IntroSection";

import { Navbar } from "./component/navbar/Navbar";
import { DisplaySkills } from "./component/displaySkills/DisplaySkills";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <DisplaySkills />

      <Resume />
    </>
  );
}

export default App;
