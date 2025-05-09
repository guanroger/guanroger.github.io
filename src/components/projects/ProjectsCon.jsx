import "./projectscon.scss";
import {motion, useInView} from "framer-motion";
import parse from 'html-react-parser';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




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


const datas =[
    {
        id:17,
        image: '/project_imgs/3D Animation/dragon_ani_2.png',
        title: 'Fire Dragon Cinematic Aniamtion',
        content:'Game Animation, Unity',
        
    },
    {
        id:16,
        image: '/project_imgs/VR/VR1.jpg',
        title: 'VR Interactive Music Museum',
        content:'VR/AR, Unity',
        
    },
    {
        id:15,
        image: '/project_imgs/NYU games/nyugame1.png',
        title: 'NYU Computer Game Deign',
        content:'Game Development, Unity, GameMaker',
        
    },
    {
        id:14,
        image: '/project_imgs/blender/dragon.png',
        title: 'Blender - The Fire Dragon',
        content:'Self-learning Blender & Maya',
    },
    {
        id:13,
        image: '/project_imgs/blender/tample.png',
        title: 'Blender - The Mystery Temple',
        content:'Self-learning Blender & Maya',
        
    },
    {
        id:12,
        image: '/project_imgs/blender/castle.png',
        title: 'Blender - The Castle in the Mountain',
        content:'Self-learning Blender & Maya',
        
    },
    {
        id:11,
        image: '/project_imgs/blender/dam.png',
        title: 'Blender - The Dam Wall',
        content:'Self-learning Blender & Maya',
        
    },
    {
        id:10,
        image: '/project_imgs/CG/CG1.png',
        title: 'NYU Computer Graphic Project',
        content:'OpenGL, GLSL, C++',
        
    },
    {
        id:9,
        image: '/project_imgs/bigdata/bigdata1.png',
        title: 'NYU Swiftpick',
        content:'Big Data, Pyhon, Flask',
        
    },
    {
        id:8,
        image: '/project_imgs/2D_game/2Dgameplay3.png',
        title: '2D Platform Action Game - The Witches Hunter',
        content:'Game Development, Unity',
        
    },
    {
        id:7,
        image: '/project_imgs/modeller/model2.png',
        title: 'Computer Graphic - Modeler',
        content:'OpenGL, C++',
        
    },
    {
        id:6,
        image: '/project_imgs/impressionist/imp3.png',
        title: 'Computer Graphic - Impressionist',
        content:'OpenGL, C++',
       
    },
    {
        id:5,
        image: '/project_imgs/raytracer/ray2.png',
        title: 'Computer Graphic - Ray Tracer',
        content:'OpenGL, C++',
        
    },
    {
        id:4,
        image: '/project_imgs/HCI/HCI-web.jpg',
        title: 'Human Computer Interaction Final Personal Project',
        content:'HCI, Web Design',
        
    },
    {
        id:3,
        image: '/project_imgs/imageprocessing/image1.png',
        title: 'Multimedia Computing Image Processor',
        content:'JavaScript, Multimedia Processing',
        
    },
    {
        id:2,
        image: '/project_imgs/audioprocessing/audio1.png',
        title: 'Multimedia Computing Audio Processor',
        content:'JavaScript, Multimedia Processing',
       
    },
    {
        id:1,
        image: '/project_imgs/uchoir_image/hkustchoir1.png',
        title: 'HKUST UChoir Offical Website',
        content:'Web Design, JavaScript, CSS',
        
    },

]
  

const ProjectCon = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true
      };
      

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


    return(
        <motion.div  className="others" variants={variants} initial="initial" ref={ref} animate={ isInView && "animate"}>
            <motion.div className="textContainer"variants={variants} initial="initial" animate="animate">
                <hr/>
                <p>{parse("Man cannot discover new oceans <br> unless he has the courage to lose sight of the shore.")}</p>
            </motion.div>
    
            <motion.div className="titleContainer"variants={variants} initial="initial" ref={ref} animate="animate">
            <div className="title">
                <img src="/project.jpg" alt=""/>
                <h1>
                    My <motion.b whileHover={{color:"orange"}}>Projects</motion.b>
                </h1>
            </div>
            <div className="title">
                <h1>
                    My <motion.b whileHover={{color:"orange"}}>Journeys.</motion.b>
                </h1>
                <img src="/journey.png" alt=""/>
            </div>

            </motion.div>
            
            <motion.div >
            <motion.div className="listContainer" variants={variants}>
            <Slider className= "slick-slider" {...settings}>
            {datas.map((project) => (
              <motion.div
                key={project.id} 
                className="box"
                style={{
                    backgroundImage: `url(${project.image})`, // Dynamically set the background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', // Ensure the box takes full width
                    height: '250px', // Set the height
                  }}
                  
              >
                <motion.img src= {project.image}></motion.img>
                
                <motion.h2 initial ={{display: "block"}}> {parse(project.title)}</motion.h2>
                
                <motion.h3 >{project.content}</motion.h3>
                
                <a href={`#project-${project.id}`} target="_self">
                  <motion.h3>Learn More...</motion.h3>
                </a>

              </motion.div>
            ))}
            </Slider>
            </motion.div>

            </motion.div>
             
            
        </motion.div>
    );
}

export default ProjectCon;