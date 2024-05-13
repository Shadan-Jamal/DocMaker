import React, { useState } from "react";
import Font from "react-font";
import Card from "./Card";
import {FaPlus} from "react-icons/fa6";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaXmark} from "react-icons/fa6";
import {motion,AnimatePresence} from "framer-motion";

export default function Main(){
const [showCard,setShowCard]=useState([]);

function handleClick(){
    setShowCard([...showCard,<Card key={showCard.length} />]);
}

return (
<Font family="Poetsen One">
    <header className="text-white font-bold h-16 text-start px-4 py-3 text-3xl tracking-wider bg-gray-700">DocMaker.</header>
    <nav className="h-14 flex flex-row justify-start items-center gap-6 bg-white/90">
        <motion.button 
        className="rounded-full p-3 transition-colors hover:bg-gray-600/50 ms-4"
        onClick={handleClick}>
            <FaPlus size={"20px"} />
        </motion.button>

        <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaMagnifyingGlass size={"20px"} />
        </motion.button>

        <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaXmark size={"22px"} />
        </motion.button>
    </nav>
    <div className="w-screen grid grid-cols-5 gap-6 px-6">
    {showCard}
    </div>
</Font>
)
}