  import React, {useState } from "react";
  import {motion} from "framer-motion";
  import { FaXmark } from "react-icons/fa6";
  import Input from "./Input";
  import "../styles.css"
  import TextCard from "./TextCard";

  const Card =  ({checkTitleEntry}) =>{
    const [readonly,setreadonly]=useState(false);
    const [titleHeading,setTitleHeading]=useState(true);

    return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-white text-black rounded-lg mt-3 max-h-32 relative"
    >
      <div className="absolute top-1 right-2 rounded-lg p-1 hover:bg-gray-400">
        <FaXmark size={"15px"} />
      </div>
    <Input readonly={readonly} 
    setreadonly={setreadonly} 
    setTitleHeading={setTitleHeading} 
    titleHeading={titleHeading} 
    checkTitleEntry={checkTitleEntry} />

    {!titleHeading && <TextCard readonly={readonly} />}
    </motion.div>
    )
  };

  export default Card;