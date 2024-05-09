import React from "react";
import {motion,AnimatePresence} from "framer-motion";
import "../styles.css"

const Popupcard =  () =>{
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="bg-white text-black w-96 absolute top-1/2 right-1/2 p-5 rounded-lg"
      >
        <label htmlFor="title" className="text-black">Enter Title:</label>
        <input type="text" id="title" className="border-b-2 border-b-black text-black w-full h-11 focus:noborders"/>
      </motion.div>  
    )
};
export default Popupcard;