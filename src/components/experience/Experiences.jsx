import "./experiences.scss"
import { motion, useScroll, useTransform , useInView} from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import StarsCanvas from "../starbackground/starBackground";
import {resume} from "./data";
import ResumeItem from "./ResumeItem";
import { useRef } from "react";

const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  
};

const textVariants_down = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
      },
    },
    
  }

const Experiences = () =>{

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    let workIconStyles = { background: "#06d6a0"}
    let schoolIconStyles = { background: "#f9c74f"}

    return (
        <div className="experiences">
            <div className="wrapper">
                <motion.div className="leftPanel" variants={textVariants} initial="initial" ref={ref} animate={ isInView && "animate"}>
                    <motion.div className="contacts" variants={textVariants}>
                        Contact
                        <motion.div className="name"  variants={textVariants}>Guan-Cherng LIN (Roger)</motion.div>
                        <motion.div className="title" variants={textVariants}> Master's Student in CS</motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/file-solid.svg" alt="" />
                                <a className="title" href="/resume/Lin, Guan-Cherng_Resume.pdf">   || Resume</a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/envelope-solid-b.svg" alt="" />
                                <a className="title" href="mailto: guanchernglin@gmail.com">  || guanchernglin@gmail.com</a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/phone-solid.svg" alt="" />
                                <a className="title">  || (+1) 347-200-8680</a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/house-solid.svg" alt="" />
                                <a className="title">  || Brooklyn, NY, US</a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/linkedin-b.svg" alt="" />
                            <a className="title" href="https://www.linkedin.com/in/guan-cherng-lin-roger-3128b019a/">  || LinkedIn</a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="card" variants={textVariants}>
                            <motion.div className="icon" variants={textVariants}> <img  src="/svg/github-b.svg" alt="" />
                            <a className="title" href="https://github.com/guanroger">  || Github</a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="leftfakePanel" variants={textVariants_down} initial="initial" ref={ref} animate={ isInView && "animate"}><StarsCanvas/></motion.div>

                <motion.div className="rightPanel" variants={textVariants_down} initial="initial" ref={ref} animate={ isInView && "animate"}>

                    <motion.div classname ="resumeContainer">
                        <motion.h2>Experience & Education</motion.h2>
                        <motion.div className="resumeData">
                            {resume.map((val)=> {
                                if (val.category === 'education'){
                                    return <ResumeItem key = {val.id} {...val}/>
                                }
                            })}
                        </motion.div>
                        
                        <motion.div className="resumeData">
                            {resume.map((val)=> {
                                if (val.category === 'experience'){
                                    return <ResumeItem key = {val.id} {...val}/>
                                }
                            })}
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div>
        </div>
    )
}

export default Experiences