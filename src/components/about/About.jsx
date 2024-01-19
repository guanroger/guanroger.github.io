import "./about.scss"
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
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
    return (

        <div className="about">
            <motion.div className="imageContainer"variants={textVariants} initial="initial" animate="animate">
                <img src = "./public/aboutme.JPG" alt=""/>
            </motion.div>
        
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}> About Me</motion.h2>
                    <motion.h3 variants={textVariants}> Guan-Cherng LIN, Roger</motion.h3>
                    <motion.h1 variants={textVariants}> Master's in CS @ NYU Tandon</motion.h1>
                    <motion.h4 variants={textVariants}>Hi, I’m Fred, aka “Taipei Tree Frog”. I am from Taiwan, and I completed my Bachelor's degree in Computer Science at HKUST. Currently, I am a graduate student at Purdue University pursuing my MSCS degree. My specialties and interests range from full-stack development, UI/UX design, cloud computing and data engineering. I’m passionate about building real-world applications. Being a software developer, I can easily make the world better by making things that are useful to other people. It’s always a great accomplishment to see other people using the product that has my code in it. If you’d like to get in touch, feel free to contact me at any time. </motion.h4>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a variants={textVariants} href="mailto: guanchernglin@gmail.com" >
                            <motion.img variants={textVariants} src="./public/envelope-solid-w.svg" alt="" />
                        </motion.a>
                        <motion.a variants={textVariants} href="https://www.linkedin.com/in/guan-cherng-lin-roger-3128b019a/">
                            <motion.img  variants={textVariants} src="./public/linkedin-w.svg" alt="" />
                        </motion.a>
                        <motion.a  variants={textVariants} href="https://github.com/guanroger">
                            <motion.img  variants={textVariants} src="./public/github-w.svg" alt="" />
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