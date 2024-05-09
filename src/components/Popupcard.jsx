import React, { useState } from "react";
import {motion,AnimatePresence} from "framer-motion";
import "../styles.css"

const Popupcard =  () =>{
    const [checkKey,setCheckKey]=useState('');

      window.addEventListener('keydown', (e)=>{
        if(e.code === "Enter")
          setCheckKey("Enter");
      });

      return <Card />
};

function Card(){
  return <motion.div
  initial={{opacity:0,scale:0}}
  animate={{opacity:1,scale:1}}
  transition={{duration:0.1}}
  exit={{opacity:0,scale:0}}
  className="bg-white text-black w-96 absolute top-1/2 right-1/2 p-5 rounded-lg"
>
  <label htmlFor="title" className="text-black">Enter Title:</label>
  <input 
  type="text" 
  id="title"
  className="border-b-2 border-b-black text-black w-full h-11 noborders"/>

</motion.div>  
}

export default Popupcard;