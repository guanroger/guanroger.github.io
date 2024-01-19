import "./projects.scss";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";


const variants = {
    initial: {
      x: 0,
      y: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  

const Projects = () =>{

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

    return(
        <motion.div className="projects" variants={variants} initial="initial" ref={ref} animate={ isInView && "animate"}>
            <motion.div className="textContainer"variants={variants} initial="initial" animate="animate">
                <p>I come, I see, I CODE!</p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer"variants={variants} initial="initial" ref={ref} animate="animate">
              <div className="title">
                <img src="/people.webp" alt=""/>
                  <h1>
                    My <motion.b whileHover={{color:"orange"}}>Projects</motion.b>
                  </h1>
              </div>
              <div className="title">
                  <h1>
                    My <motion.b whileHover={{color:"orange"}}>Endeavors.</motion.b>
                  </h1>
                  <a  href="https://github.com/guanroger">
                    <motion.button  onClick="https://github.com/guanroger" whileHover={{ background: "lightgray", color: "black" }}>See More <img src="/github-w.svg" alt=""/></motion.button>
                  </a>
              </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
              <motion.div
                className="box"
                whileHover={{ background: "lightgray", color: "black" }}
              >
                <h2>guanroger/ CS.GY6513.2023.Fall. Big.Data.Final</h2>
                <p>
                  NYU Tandon Big Data Course using pyspark, MongoDB.
                </p>
                <a href="https://github.com/guanroger/CS-GY6513-2023-Fall-Big-Data-Final">
                  <button>Go</button>
                </a>
              </motion.div>
              <motion.div
                className="box"
                whileHover={{ background: "lightgray", color: "black" }}
              >
                <h2>guanroger/ guanroger.github.io</h2>
                <p>
                  Personal Webpage using React.js.
                </p>
                <a href="https://github.com/guanroger/guanroger.github.io">
                  <button>Go</button>
                </a>
              </motion.div>
              <motion.div
                className="box"
                whileHover={{ background: "lightgray", color: "black" }}
              >
                <h2>guanroger/ COMP4411_Project1</h2>
                <p>
                  4 HKUST Computer Graphic Group Projects using OpenGL.
                </p>
                <a href="https://github.com/guanroger/COMP4411_Project1">
                  <button>Go</button>
                </a>
              </motion.div>
              <motion.div
                className="box"
                whileHover={{ background: "lightgray", color: "black" }}
              >
                <h2>guanroger/ LAAFU.server.demo</h2>
                <p>
                   HKUST Final Year Project using Python and Flask.
                </p>
                <a href="https://github.com/guanroger/LAAFU-server-demo">
                  <button>Go</button>
                </a>
              </motion.div>
              
            </motion.div>
            
             
            
        </motion.div>
    );
}

export default Projects;