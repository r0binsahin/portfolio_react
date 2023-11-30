import "./App.scss";
import { Resume } from "./component/resume/Resume";
import { IntroSection } from "./component/introSection/IntroSection";

import { Navbar } from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />

      <Resume />
    </>
  );
}

export default App;
