import React from 'react'
import {motion} from "framer-motion";

function Input() {
    const [checkInput,setCheckInput]=useState('');
    const [checkTitle,setCheckTitle]=useState('');

  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.1}}
    className="bg-gray-400 text-black p-3 rounded-lg"
  >
    <label htmlFor="title" className="text-black">Enter Title:</label>
    <input
    value={checkInput}
    onKeyDown={e => setCheckTitle(e.code)}
    onChange={e => setCheckInput(e.target.value)} 
    type="text" 
    id="title"  
    className="border-b-2 border-b-black text-black w-full h-11 noborders"/>
  </motion.div>
  )
}

export default Input;