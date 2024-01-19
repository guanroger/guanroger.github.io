import React from 'react'
import parse from 'html-react-parser';
import "./resumeItem.scss";
import { motion , useInView} from "framer-motion";
import { useRef } from "react";

const textVariants_down = {
    initial: {
      y: 500,
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

const ResumeItem =({icon, year, title, desc}) =>{
  const ref = useRef();

  const isInView = 1;
    return (
        <motion.div className="resumeItem" variants={textVariants_down} initial="initial" ref={ref} animate={ isInView && "animate"}>
            <motion.div className="resumeIcon">{icon}</motion.div>

            <motion.span className="resumeDate">{year}</motion.span>
            <motion.h3 className="resumeSubtitle">{parse(title)}</motion.h3>
            <motion.p className="resumeDescription">{desc}</motion.p>

        </motion.div>
    )
}

export default ResumeItem