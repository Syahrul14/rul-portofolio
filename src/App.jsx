import React, { useState, useEffect } from 'react';
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-indigo-950 font-preahvihear p-0 m-0">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Tools />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
