import { useRef } from "react";
import "./demo.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NYU Swiftpick",
    img: "/demo/swiftpick.png",
    desc: "This is the final result of NYU CS-GY 6513 Big Data Course. We build a website that can give the driver to find the best pickup spot in New York. We use the past Taxi Data captured in NY, with the Big Data knowledge we learned and the past experiences we have (Frontend/Backend & Custering to finish it.",
    demo:"https://swiftpick-bigdata-project-online.onrender.com/",
  },
  {
    id: 2,
    title: "HKUST Human Computer Interaction Final Personal Project",
    img: "/demo/HCI-web.jpg",
    desc: "This website is my pervious personal website. In it was the 3 projects that i have idealize with my classmates using the HCI techniques learned in the HCI course",
    demo:"https://guanchernglin.wixsite.com/website",
  },
  {
    id: 3,
    title: "HKUST Game Programming Final Project - 2D Platform Action Game",
    img: "/demo/2Dgameplay.png",
    desc: "Cooperated with groupmates to develop a small 2D platform action game using Unity and C. Designed key-binding system for players to move around and shoot enemies, a skill tree system to update status and upgrade weapons. Also designed various levels and difficulties for maps. Innovated and designed the whole concept of the game world, game narrative arcs, features, and scenarios for gameplay",
    demo: "https://github.com/guanroger/HKUST-COMP4451-mini-game"
  },
  {
    id: 4,
    title: "HKUST UChoir Offical Website",
    img: "/demo/hkustchoir.png",
    desc: "First time using HTML/CSS, Cooperated with a senior student in UChoir to build an interactive website.",
    demo:"https://choir.su.hkust.edu.hk/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo}><button>See Demo</button></a>
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
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="demo" ref={ref}>
      <div className="progress">
        <h1>Demos</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Demo;