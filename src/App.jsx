import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
} from "./components";
import Marquee from "./components/Marquee";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-secondary">
        {/* Marquee affiché en haut */}
        <Marquee text="$PIRATE"/>

        {/* Navbar avec coins arrondis */}
        

        {/* Hero avec coins arrondis */}
        <div className="rounded-3xl overflow-hidden bg-primary mx-4 my-6">
          <Hero />
        </div>

        {/* Marquee entre les sections */}
        <Marquee text="$PIRATE" />

        {/* About section */}
        <div className="rounded-3xl overflow-hidden bg-primary mx-4 my-6">
          <About />
        </div>

        {/* Marquee entre les sections */}
        <Marquee text="$PIRATE"/>

        {/* Tech section */}
        <div className="rounded-3xl overflow-hidden bg-primary mx-4 my-6">
          <Tech />
        </div>

        {/* Marquee entre les sections */}
        <Marquee text="$PIRATE"/>

        {/* Contact section */}
      </div>
    </BrowserRouter>
  );
}

export default App;
