import "./app.scss"

import About from "./components/about/About";
import Experiences from "./components/experience/Experiences";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarsCanvas from "./components/starbackground/starBackground";
import Projects from "./components/projects/Projects";
import Github from  "./components/Github/Github";
import Demo_old from "./components/demo_old/Demo";
import Demo_reel from "./components/demo_reel/Demo_reel";
import Contact from "./components/contact/Contact";
import Others from "./components/others/Others";
import ProjectCon from "./components/projects/ProjectsCon";

const App = () => {
  return <div>
    
    <section className ="section1" id ="Homepage"><Navbar/><Parallax type="services"/></section>
    <section id ="About"><About/></section>
    <section className ="section2"><Experiences/></section>
    <section className ="section1" id ="ProjectCon"> <ProjectCon/></section>
   

    <section3 id="Projects"></section3>
    <Projects/>
    
    <section className ="section1" id ="Github"><Github/></section>
    <section className ="section1" id ="Demo Reel"><Demo_reel/></section>
    {/*
    <section3 id="Demos"></section3>
    <Demo_old/>
    */}
    <section className ="section1" id ="Others"><Others/></section>
    <section className ="section1" id ="Contact"><Contact/></section>
  </div>;
};

export default App;
