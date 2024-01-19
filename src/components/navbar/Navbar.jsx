import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/links";
import "./navbar.scss"
import ToggleButton from "./toggleButton/toggleButton";

const variants = {
    open: {
      clipPath: "circle(2000px at 30px 30px)",
      transition: {
        type: "spring",
        stiffness: 20,
    
      },
    },
    closed: {
      clipPath: "circle(20px at 40px 30px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    
  return (<motion.div className="navbar" animate={open ? "open" : "closed"}>
    <motion.div className="bg" variants={variants}>
        <Links/>
    </motion.div>
    <ToggleButton setOpen={setOpen}/>

  </motion.div>
  );

};

export default Navbar;