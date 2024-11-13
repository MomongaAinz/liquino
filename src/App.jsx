import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'  ;

import { About, Contact, Experience,ExperienceT, Feedbacks, DownloadCV, Hero, Navbar, Tech, Works} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <ExperienceT/>
      <Experience/>
      <Tech/>
      <Works/>
      <DownloadCV/>
      <div className="relative z-0">
        <Contact/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
