  import React, { useState } from "react";
  import {AnimatePresence, motion} from "framer-motion";
  import Input from "./Input";
  import "../styles.css"
import TextCard from "./TextCard";

  const Card =  () =>{
    return (<motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-white text-black rounded-lg mt-3"
    >
    <Input />
    </motion.div>)
  };

  export default Card;