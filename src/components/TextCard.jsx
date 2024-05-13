import React from 'react'
import {motion} from "framer-motion";

function TextCard() {
  return (
    <motion.div className="bg-transparent px-1 rounded-lg">
    <textarea id="text-content" className="bg-white text-black w-full p-1 border-l-black noborders-input">

    </textarea>
  </motion.div>
  )
}

export default TextCard;