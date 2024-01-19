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

const App = () => {
  return <div>
    
    <section id ="Homepage"><Navbar/><Parallax type="services"/></section>
    <section id ="About"><About/></section>
    <section ><Experiences/></section>
    <section id ="Projects"><Projects/></section>
    <Demo/>
    
    <section id ="Contact"><Contact/></section>
  </div>;
};

export default App;
