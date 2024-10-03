import { useRef, useState } from "react";
import "./projects.scss";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 14,
    title: "Blender - The Fire Dragon",
    img: [
      "/project_imgs/blender/dragon.png",
      "/project_imgs/blender/dragon2.png",
    ],
    desc: "This is the personal concept art project I created using Blender, Photoshop, and Substance Painter.  In this piece, I create the red fire dragon on my own from character designing, modeling, sculpting, retopology, texturing, rigging. I also animated the flying cycle and did the post-production. The idea of the dragon is mostly from Game of Throne, How to Train Your Dragon, and other fantasy movies.", 
    time: "Blender, PS, Substance Painter, Self-learning Personal Practice 2024",
    demo:"https://youtu.be/ZIOvnwrAJdM",
    button: "See Video", 
  },
  {
    id: 13,
    title: "Blender - The Mystery Temple",
    img: [
      "/project_imgs/blender/tample.png",
    ],
    desc: "This is the personal concept art project I created using Blender and Photoshop.  In this piece, I learn how to generate organic vegetation, and use sculpt tool to add stencils onto the walls.",
    time: "Blender, PS, Self-learning Personal Practice 2024",
    demo:"https://youtu.be/d0vdxW9c7rU",
    button: "See Video", 
  },
  {
    id: 12,
    title: "Blender - The Castle in the Mountain",
    img: [
      "/project_imgs/blender/castle.png",
    ],
    desc: "This is the personal concept art project I created using Blender and Photoshop. In this piece, I learn how to make snow and photo-realistic cliff by using Sculpt tools",
    time: "Blender, PS, Self-learning Personal Practice 2024",
    demo:"https://youtu.be/AvHER5zcrt8",
    button: "See Video", 
  },
  {
    id: 11,
    title: "Blender - The Dam Wall",
    img: [
      "/project_imgs/blender/dam.png",
    ],
    desc: "This is the course final project I created in a Blender online course using Blender and Photoshop. In the course, I learned a lot by following the instructor, who is a Concept artist working in Gaming Industry, and utilize what he taught inside the final project, including how to use blender, the use of light, the depth and the place of the camera, the use of fog, cinematography, etc. to carve out every detail of this piece.",
    time: "Blender, PS, Self-learning Personal Practice 2024",
    demo:"https://www.youtube.com/watch?v=AyefxouYM1M",
    button: "See Video", 
  },
  {
    id: 10,
    title: "NYU Computer Graphic Project",
    img: [
      "/project_imgs/CG/CG1.png",
      "/project_imgs/CG/CG2.png",
      "/project_imgs/CG/CG3.png",
      "/project_imgs/CG/CG4.png",
    ],
    desc: "Implemented by C/C++, OpenGL and GLSL, this project is for NYU CS-GY 6533 Computer Graphic Course. In this project, the user can choose different kinds of spheres and watches it rolls around the floor. Several features are included in this project, such as Rotation Correctness while translating, Shadow Correction while casting lights, Flat Shading and Smooth Shading, Different Light Sources, Different Fog Options, Texturing, etc. It also can shoot firework from the origin of the floor.",
    time: "CS-GY 6533 Computer Graphic @ NYU (Graduate Level) 2024",
    demo:"https://github.com/guanroger/Computer-Graphic-Project",
    button: "See Code", 
  },
  {
    id: 9,
    title: "NYU Swiftpick",
    img: [
      "/project_imgs/bigdata/bigdata1.png",
      "/project_imgs/bigdata/bigdata2.png",
      "/project_imgs/bigdata/bigdata3.png",
    ],
    desc: "This is the final result of NYU CS-GY 6513 Big Data Course. We build a website that can give the driver to find the best pickup spot in New York. We use the past Taxi Data captured in NY, with the Big Data knowledge we learned and the past experiences we have (Frontend/Backend & Custering to finish it.",
    time: "CS-GY 6513 Big Data @ NYU (Graduate Level) 2023",
    demo:"https://swiftpick-bigdata-project-online.onrender.com/",
    button: "See Demo", 
  },
  {
    id: 8,
    title: "2D Platform Action Game -   The Witches Hunter",
    img: [ "/project_imgs/2D_game/2Dgameplay1.png",
      "/project_imgs/2D_game/2Dgameplay2.png",
      "/project_imgs/2D_game/2Dgameplay3.png",
      "/project_imgs/2D_game/2Dgameplay4.png",
    ],
    desc: "Cooperated with groupmates to develop a small 2D platform action game using Unity and C. Designed key-binding system for players to move around and shoot enemies, a skill tree system to update status and upgrade weapons. Also designed various levels and difficulties for maps. Innovated and designed the whole concept of the game world, game narrative arcs, features, and scenarios for gameplay",
    time: "COMP4451 Computer Game Design @ HKUST 2021",
    demo: "https://github.com/guanroger/HKUST-COMP4451-mini-game",
    button: "See Code", 
   
  },
  {
    id: 7,
    title: "Computer Graphic - Modeler",
    img: [ "/project_imgs/modeller/model1.png",
      "/project_imgs/modeller/model2.png",
      "/project_imgs/modeller/model3.png",
      "/project_imgs/modeller/model4.png",
    ],
    desc: "Using C/C++ and OpenGL, I cooperated with groupmate to implement a basic modeler, in which I build a robot whose positions can be controlled by the users (the translation, rotation of its joints and body parts). The user can also control the direction of the lights, the display of the robots (different hierarchies, wireframe modes, simple-structure mode, etc.) Apart from that, we also  implement the L-system (its wings), Metaball (its weapons), Inverse kinematics systems to control the position of its arm, and a simple animation.",
    time: "COMP4411 Computer Graphic @ HKUST 2021",
    demo: "https://github.com/ykwongaq/COMP4411_Project2",
    button: "See Code", 
   
  },
  {
    id: 6,
    title: "Computer Graphic - Impressionist",
    img: [ "/project_imgs/impressionist/imp1.png",
      "/project_imgs/impressionist/imp2.png",
      "/project_imgs/impressionist/imp3.png",
      
    ],
    desc: "Using C/C++ and OpenGL, I cooperated with groupmate to implement a basic OpenGL campus that can change the image into different art piece by using different brushes, including scattered circle brush, line brush, gradient line brush, etc.",
    time: "COMP4411 Computer Graphic @ HKUST 2021",
    demo: "https://github.com/ykwongaq/COMP4411_Project1",
    button: "See Code", 
   
  },
  {
    id: 5,
    title: "Computer Graphic - Ray Tracer",
    img: [ "/project_imgs/raytracer/ray1.png",
      "/project_imgs/raytracer/ray2.png",
      "/project_imgs/raytracer/ray3.png",
      "/project_imgs/raytracer/ray4.png",
    ],
    desc: "Using C/C++ and OpenGL, I cooperated with groupmate to implement a basic OpenGL Ray Tracer. It can showcase some basic refraction, texture mapping, recursive depth, shaped light, etc.",
    time: "COMP4411 Computer Graphic @ HKUST 2021",
    demo: "https://github.com/ykwongaq/COMP4411_Project3",
    button: "See Code", 
   
  },
  {
    id: 4,
    title: "Human Computer Interaction Final Personal Project",
    img: ["/project_imgs/HCI/HCI-web.jpg",
      "/project_imgs/HCI/HCI-web2.png",
      "/project_imgs/HCI/HCI-web3.png",
      "/project_imgs/HCI/HCI-web4.png",
    ],
    desc: "This website is my pervious personal website, which has the projects that I idealized with my classmates using the HCI techniques learned from the HCI course, such as Prototyping, Storyboarding, Persona-Developing, Speed-Dating, etc. We came up with 3 projects, namely an online-communication tool for the elderlies, Real-time responding chat-bot for tourist advising, and a VR board-game.",
    time: "COMP4461 Human Computer Interaction @ HKUST 2020",
    demo:"https://guanchernglin.wixsite.com/website",
    button: "See Demo", 
  },
  {
    id: 3,
    title: "Multimedia Computing Image Processor",
    img: ["/project_imgs/imageprocessing/image1.png",
      "/project_imgs/imageprocessing/image2.png",
      "/project_imgs/imageprocessing/image3.png",
    ],
    desc: "Using JavaScript and HTML, this is a lab project from the Multimedia Computing course, in which we can choose different stored images, and turn them into different styles using several image processing techniques such as Kuwahara Filter, Posterization, Ordered Dithering, etc. It can also increase the saturation of old images and make some stylish pictures, like those in comic books and old posters.",
    time: "COMP4431 Multimedia Computing @ HKUST 2020",
    demo:"https://guanroger.github.io/comp4431-lab-image-processing/",
    button: "See Demo", 
    
  },
  {
    id: 2,
    title: "Multimedia Computing Audio Processor",
    img: ["/project_imgs/audioprocessing/audio1.png",
      "/project_imgs/audioprocessing/audio2.png",
    ],
    desc: "Using JavaScript and HTML, this is a lab project from the Multimedia Computing course, in which we can generate different waveforms such as sine, square, sawtooth, etc. and play it out. We also use several different audio processing techniques to generate different sounds in the same frequency. Furthermore, you can also import your favorite MIDI file and it will play it for you.",
    time: "COMP4431 Multimedia Computing @ HKUST 2020",
    demo:"https://guanroger.github.io/comp4431-lab-audio-processing/",
    button: "See Demo", 
    
  },
  {
    id: 1,
    title: "HKUST UChoir Offical Website",
    img: ["/project_imgs/uchoir_image/hkustchoir1.png",
      "/project_imgs/uchoir_image/hkustchoir2.png",
    ],
    desc: "First time using HTML/CSS, Cooperated with a senior student in UChoir to build an interactive website.",
    time: "IT Security of The University Choir, HKUSTSU @ HKUST 2019",
    demo:"https://choir.su.hkust.edu.hk/",
    button: "See Demo", 
  },
];

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


const Single = ({ item }) => {
  const ref = useRef();


  const { scrollYProgress } = useScroll({
    target: ref,
    
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item.img.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + item.img.length) % item.img.length);
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <button className="prevButton" onClick={prevImage}>
              &#8249;
            </button>

            <img
              src={item.img[currentImage]}
              alt={`${item.title} ${currentImage + 1}`}
              key={currentImage}
            />
            <button className="nextButton" onClick={nextImage}>
              &#8250;
            </button>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <h4>{item.time}</h4>
            <p>{item.desc}</p>
            <a href={item.demo}><button>{item.button}</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Demo = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    
    <motion.div className="demo" variants={variants} initial="initial" ref={ref} animate={ isInView && "animate"}>

      <div className="progress">
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
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default Demo;