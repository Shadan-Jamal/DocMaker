import React from 'react'
import {motion} from "framer-motion";

function NoteCard() {
 return (
    <motion.div
    initial={{scaleX:-99}}
    animate={{scaleX:1}}
    className="text-black bg-white w-20 h-36"
    >
        <h2>Note Card</h2>
    </motion.div>
  )
}

export default NoteCard;