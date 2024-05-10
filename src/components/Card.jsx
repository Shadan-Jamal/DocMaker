import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import "../styles.css"

const Card =  () =>{
  const [showTextBox,setShowTextBox]=useState(false);

  function checkTitle(...data){

  }

  return <PopUpCard setter={checkTitle}/>
};

function PopUpCard({setter}){
  const [checkInput,setCheckInput]=useState('');
  const [checkTitle,setCheckTitle]=useState('');

  checkTitle === "Enter" && setter(checkTitle,checkInput);

  return (<AnimatePresence>
  {isVisible && (<motion.div
  initial={{opacity:0,scale:0}}
  animate={{opacity:1,scale:1}}
  exit={{opacity:0,scale:0}}
  transition={{duration:0.1}}
  className="bg-white text-black w-64 h-24 p-3 mt-5 rounded-lg"
>
  <label htmlFor="title" className="text-black">Enter Title:</label>
  <input
  value={checkInput}
  onKeyDown={e => setCheckTitle(e.code)}
  onChange={e => setCheckInput(e.target.value)} 
  type="text" 
  id="title"  
  className="border-b-2 border-b-black text-black w-full h-11 noborders"/>
</motion.div>)}
</AnimatePresence>)
}


function NoteCard(){
  return <motion.div>
    <textarea id="text-content">

    </textarea>
  </motion.div>
}
export default Card;