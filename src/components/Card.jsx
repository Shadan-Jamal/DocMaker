  import React, { useState } from "react";
  import {motion,useDragControls} from "framer-motion";
  import Input from "./Input";
  import "../styles.css"
import TextCard from "./TextCard";

  const Card =  () =>{
    const controls=useDragControls();
    
    return (<div className="" onPointerDown={(e)=>controls.start(e)}>
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-white text-black rounded-lg mt-3 max-w-52"
    drag="x"
    dragControls={controls}
    >
    <Input />
    </motion.div>
    </div>
    )
  };

  export default Card;