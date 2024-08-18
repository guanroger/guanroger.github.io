import { useRef } from "react";
import "./demo_reel.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";



const Demo = () => {
  const ref = useRef();




  
  return (
    <div className="demo_reel" ref={ref}>
      <div className="progress">
        <h1>Demo Reel</h1>
        <div className="progressBar"></div>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/YyIeDWVdtE8?si=VTIDPdTme7N6Gwi6`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
              />
        </div>
      </div>
      
      
    </div>
  );
};

export default Demo;