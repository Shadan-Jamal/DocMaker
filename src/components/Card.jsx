  import React, { useId, useState } from "react";
  import {motion,useDragControls} from "framer-motion";
  import Input from "./Input";
  import "../styles.css"
  import TextCard from "./TextCard";

  const Card =  () =>{
    const textCardId=useId();
    const [readonly,setreadonly]=useState(false);
    const [titleHeading,setTitleHeading]=useState(true);

    return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-white text-black rounded-lg mt-3 max-h-32"
    >
    <Input readonly={readonly} setreadonly={setreadonly} titleHeading={titleHeading} setTitleHeading={setTitleHeading}/>
    
    {!titleHeading && <TextCard readonly={readonly} />}
    </motion.div>
    )
  };

  export default Card;