import React from 'react'
import {motion} from "framer-motion";

function TextCard({readonly}) {
  return ( 
    <motion.div className="bg-transparent px-1 rounded-lg">
    <textarea
    autoFocus={readonly} 
    id="text-content"
    className='bg-white text-black w-full p-1 border-l-black noborders-input h-10 focus:outline-none'>
    </textarea>
  </motion.div>
  )
}

export default TextCard;