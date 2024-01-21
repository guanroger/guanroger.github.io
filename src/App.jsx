import "./app.scss"

import About from "./components/about/About";
import Experiences from "./components/experience/Experiences";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarsCanvas from "./components/starbackground/starBackground";
import Projects from "./components/projects/Projects";
import Demo from "./components/demo/Demo";
import Contact from "./components/contact/Contact";
import Others from "./components/others/Others";

const App = () => {
  return <div>
    
    <section className ="section1" id ="Homepage"><Navbar/><Parallax type="services"/></section>
    <section id ="About"><About/></section>
    <section className ="section2"><Experiences/></section>
    <section className ="section1" id ="Projects"><Projects/></section>
    <section1 className ="section2" id="Demos"></section1>
    <Demo className ="section2" />
    <section className ="section1" id ="Others"><Others/></section>
    <section className ="section1" id ="Contact"><Contact/></section>
  </div>;
};

export default App;
