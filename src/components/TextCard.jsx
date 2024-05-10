import React from 'react'
import {motion} from "framer-motion";

function TextCard() {
  return (
    <motion.div className="bg-transparent px-3">
    <header className="text-black w-full noborders">Example</header>
    <textarea id="text-content" className="bg-white text-black w-full p-3 rounded-lg" drag>

    </textarea>
  </motion.div>
  )
}

export default TextCard