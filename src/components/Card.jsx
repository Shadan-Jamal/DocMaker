  import React, { useState } from "react";
  import {AnimatePresence, motion} from "framer-motion";
  import "../styles.css"

  const Card =  () =>{

    var checkKey;
    function checkTitle(...data){
      checkKey=data[0];
      if(checkKey === "Enter"){
      console.log(data)
      return <NoteCard title={checkKey}/>
      }
    }
    return checkTitle();

  };

  function PopUpCard({setter}){
    const [checkInput,setCheckInput]=useState('');
    const [checkTitle,setCheckTitle]=useState('');

    checkTitle === "Enter" && setter(checkTitle,checkInput);
    return (<motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
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
  </motion.div>)
  }


  function NoteCard(props){
    return (<motion.div>
      <header className="border-b-2 border-b-black text-black w-full h-11 noborders">{props.title}</header>
      <textarea id="text-content" className="bg-white text-black w-72 h-48 p-3 mt-5 rounded-lg">

      </textarea>
    </motion.div>)
  }

  export default Card;