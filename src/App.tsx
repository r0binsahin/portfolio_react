import "./App.scss";
import { About } from "./component/about/About";
import { IntroSection } from "./component/introSection/IntroSection";

import { Navbar } from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />

      <About />
    </>
  );
}

export default App;
