import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import StarsCanvas from "../starbackground/starBackground";
import Starfield from 'react-starfield';

const Parallax = ({ type }) => {
  const image = ["/envelope-solid-w.svg","/linkedin-w.svg", "/github-w.svg"];


  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.div className="starfield" style={{ y: yText }}>
        <Starfield

          starCount={3000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="#0c0c1d "
        />
      </motion.div>
      
      <motion.div className="title" style={{ y: yText }}>
      
        <center><h1>{type === "services" ? 
        "Roger LIN" : "What We Did?"}</h1>
        <h3> {type === "services" ? 
        "If you DREAM it, you can MAKE IT GO!" : "What We Did?"}</h3>
        
        
        </center>
        
      </motion.div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax