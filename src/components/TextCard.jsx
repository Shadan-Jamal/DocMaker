import React from 'react'
import {motion} from "framer-motion";

function TextCard() {
  return (
    <motion.div className="">
    <header className="border-b-2 border-b-black text-black w-full h-11 noborders">Example</header>
    <textarea id="text-content" className="bg-white text-black w-72 h-48 p-3 rounded-lg">

    </textarea>
  </motion.div>
  )
}

export default TextCard