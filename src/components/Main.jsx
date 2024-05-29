import React, { useState } from "react";
import Font from "react-font";
import Card from "./Card";
import {FaPlus} from "react-icons/fa6";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaXmark} from "react-icons/fa6";
import {motion,AnimatePresence} from "framer-motion";

export default function Main(){
const [showCard,setShowCard]=useState([]);
const [searchField,setSearchField]= useState(false);

function handleClick(){
    setShowCard([...showCard,<Card key={showCard.length} />]);
}

const openSearch=()=>{
    setSearchField(!searchField);
}

return (
<Font family="Poetsen One">
    <div className="sticky top-0 w-screen">
        <header className="text-white font-bold h-16 text-start px-4 py-3 text-3xl tracking-wider bg-gray-700">DocMaker.</header>
        <nav className="h-14 flex flex-row justify-start items-center gap-6 bg-white/90">
            
            <motion.button 
            className="rounded-full p-3 transition-colors hover:bg-gray-600/50 ms-4"
            onClick={handleClick}>
                <FaPlus size={"20px"} />
            </motion.button>

            <motion.button
            onClick={openSearch} 
            className="rounded-full p-3 transition-colors hover:bg-gray-600/50" >
                <FaMagnifyingGlass size={"20px"} />
            </motion.button>

            {searchField && 
            <motion.input
            placeholder="Search the note..." 
            autoFocus 
            initial={{scaleX:0}}
            animate={{scaleX:1}} 
            className="text-base p-2 rounded">
            </motion.input>}

            <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaXmark size={"22px"} />
            </motion.button>
        </nav>
    </div>
    <div className="w-screen grid grid-cols-5 grid-flow-row gap-6 px-6">
    {showCard}
    </div>
</Font>
)
}