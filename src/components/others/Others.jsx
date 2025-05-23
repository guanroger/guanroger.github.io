import "./others.scss";
import {motion, useInView} from "framer-motion";
import parse from 'html-react-parser';
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
  

const Others = () =>{

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


    return(
        <motion.div className="others" variants={variants} initial="initial" ref={ref} animate={ isInView && "animate"}>
            <motion.div className="textContainer"variants={variants} initial="initial" animate="animate">
                <hr/>
                <p>{parse("There is one spectacle grander than the sea, that is the sky; <br> There is one spectacle grander than the sky, that is the interior of the soul.")}</p>
            </motion.div>
    
            <motion.div className="titleContainer"variants={variants} initial="initial" ref={ref} animate="animate">
              <div className="title">
                  <h1>
                    <motion.b whileHover={{color:"orange"}}>Other</motion.b> Works
                    <hr/>
                  </h1>
                  
              </div>
            </motion.div>
            
            <motion.div >
            <motion.div className="listContainer" variants={variants}>
              <motion.div
                className="box"
                style={{
                    background: `url('/others/3dmodel.png')`,
                    backgroundSize: 'cover',
                    transition: 'background-color 0.3s ease-in-out', // Optional: Add a smooth transition
                  }}
                  
              >
                <motion.h2 initial ={{display: "block"}}>{parse("3D modeling <br>Animation")}</motion.h2>
                <motion.h3 >Self-learning Blender & Maya</motion.h3>
                <a href="https://github.com/guanroger/Maya-Practice">
                  <motion.h3 >Learn More...</motion.h3>
                </a>
                
              </motion.div>
              
              <motion.div
                className="box"
                style={{
                    background: `url('/others/poster.png')`,
                    backgroundSize: 'cover',
                    transition: 'background-color 0.3s ease-in-out', // Optional: Add a smooth transition
                  }}
                  
              >
                <motion.h2 initial ={{display: "block"}}>{parse("Photo Editing <br>Poster Design")}</motion.h2>
                <motion.h3 >Using Photoshop, Illustrator, etc.</motion.h3>
                <a href="https://drive.google.com/drive/folders/1tDKHsro-HEyLz4gk8q_5WTaKZtdrp_1f?usp=sharing">
                  <motion.h3 >Learn More...</motion.h3>
                </a>
                
              </motion.div>
              <motion.div
                className="box"
                style={{
                    background: `url('/others/video.png')`,
                    backgroundSize: 'cover',
                    transition: 'background-color 0.3s ease-in-out', // Optional: Add a smooth transition
                  }}
                  
              >
                <motion.h2 initial ={{display: "block"}}>{parse("Video Editing <br>Sound Editing")}</motion.h2>
                <motion.h3 >Using Adobe Premire, Audition, PowerDirector, etc.</motion.h3>
                <a href="https://guanchernglin.wixsite.com/my-video-portfolio">
                  <motion.h3 >Learn More...</motion.h3>
                </a>
                

              </motion.div>
              <motion.div
                className="box"
                style={{
                    background: `url('/others/illus.png')`,
                    backgroundSize: 'cover',
                    transition: 'background-color 0.3s ease-in-out', // Optional: Add a smooth transition
                  }}
                  
              >
                <motion.h2 initial ={{display: "block"}}>{parse("Illustrations<br>for Interests")}</motion.h2>
                <motion.h3 >Using Photoshop, Illustrator, etc.</motion.h3>
                <a href="https://www.instagram.com/roger.daydreamingart/">
                  <motion.h3 >Learn More...</motion.h3> 
                </a>
                

              </motion.div>
              
            </motion.div>

            </motion.div>
             
            
        </motion.div>
    );
}

export default Others;