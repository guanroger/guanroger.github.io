import "./about.scss"
import {motion, useInView} from "framer-motion";
import { useRef } from "react";


const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const About = () =>{

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-15px" });
    return (

        <div className="about">
            <motion.div className="imageContainer"variants={textVariants} initial="initial" ref={ref} animate={ isInView && "animate"}>
                <img src = "/aboutme.JPG" alt=""/>
            </motion.div>
        
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" ref={ref} animate={ isInView && "animate"}>
                    <motion.h2 variants={textVariants}> About Me</motion.h2>
                    <motion.h3 variants={textVariants}> Guan-Cherng LIN, Roger</motion.h3>
                    <motion.h1 variants={textVariants}> Master's in CS @ NYU Tandon</motion.h1>
                    <motion.h4 variants={textVariants}>Hi, I’m Guan-Cherng LIN (Roger). I am from Taiwan, and I completed my Bachelor's degree in Computer Science at HKUST. 
                    I am currently a graduate student at NYU Tandon pursuing my MSCS degree. My specialties and interests range from UI/UX design, Game Engineering and Compter Graphic. 
                    I'm passionate about creating impactful real-world applications. As a software developer, I find joy in contributing to the betterment of the world by crafting useful solutions for others. 
                    Witnessing people use products with my code is a fulfilling accomplishment.
                    I'm also driven by a passion for continuous learning and embracing new technologies to enhance my skills. Crafting solutions that others find valuable is a source of great accomplishment for me.
                    If you’d like to get in touch, feel free to contact me at any time. I'm always open for connections.</motion.h4>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a variants={textVariants}  href="mailto: guanchernglin@gmail.com" >
                            <motion.img variants={textVariants} src="/svg/envelope-solid-w.svg" alt="" />
                        </motion.a>
                        <motion.a variants={textVariants}  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roger-lin-3128b019a/">
                            <motion.img  variants={textVariants} src="/svg/linkedin-w.svg" alt="" />
                        </motion.a>
                        <motion.a  variants={textVariants}  target="_blank" rel="noopener noreferrer" href="https://github.com/guanroger">
                            <motion.img  variants={textVariants} src="/svg/github-w.svg" alt="" />
                        </motion.a>
                        <motion.a  variants={textVariants} target="_blank" rel="noopener noreferrer" href="https://rogerguan.itch.io/">
                            <motion.img  variants={textVariants} src="/svg/itchio-textless-white.svg" alt="" />
                        </motion.a>
                    </motion.div>
                    
                    <motion.div
                        className="slidingTextContainer"
                        variants={sliderVariants}
                        initial="initial"
                        animate="animate"
                    >
                        Programing, Dream
                    </motion.div>
                </motion.div>
            </div>
            

        </div>
    )
}

export default About