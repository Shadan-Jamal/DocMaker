  import React, { useState } from "react";
  import {motion,useDragControls} from "framer-motion";
  import Input from "./Input";
  import "../styles.css"
  import TextCard from "./TextCard";

  const Card =  () =>{
    const [checkInput,setCheckInput]=useState('');
    const [checkTitle,setCheckTitle]=useState(false);
    
    const inputCard=(e)=>{
      setCheckInput(e.target.value);
    }
    
    const textCard=(e)=>{
      e.target.value === "Enter" && setCheckTitle(true);
    }

    return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-white text-black rounded-lg mt-3"
    
    >
    <Input text={checkInput} changeInput={inputCard}/>
    <TextCard title={checkTitle} onPressEnter={textCard}/>
    </motion.div>
    )
  };

  export default Card;