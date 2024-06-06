import React, { useId, useRef, useState } from "react";
import Font from "react-font";
import Card from "./Card";
import {FaPlus,FaMagnifyingGlass,FaXmark} from "react-icons/fa6";
import {motion,AnimatePresence} from "framer-motion";

export default function Main(){
const [showCard,setShowCard]=useState([]);
const [searchField,showSearchField]= useState(false);
const [titles,setTitle]=useState([]);
const [searchInput,setSearchInput]=useState('');

const openSearch=()=>{
    showSearchField(!searchField);
}

const checkTitleEntry=(title) => {
    setTitle([...titles,title]);
}

const handleClick=()=>{
    setShowCard((prevCard) => [...prevCard, {}])
}

const handleSearchQuery = (searchInput,enterPressed) =>{
    if(enterPressed === "Enter"){
        console.log(titles,searchInput,showCard);
        setShowCard(() => {
            return showCard.filter(item => {
                console.log(item);
            })
        })
    }
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

            <AnimatePresence>
            {searchField && 
                <motion.input
                key="search"
                initial={{scale:0, backgroundColor: "" }}
                animate={{scale:1 , backgroundColor: "black"}}
                exit={{scale:0, backgroundColor: "black"}}
                transition={{duration:0.2}}
                placeholder="Search the note..."
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                onKeyDown={(e) => handleSearchQuery(searchInput,e.key)}
                autoFocus 
                className="text-base p-2 rounded text-white focus:border-red-500">
                </motion.input>
            }

            <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaXmark size={"22px"} />
            </motion.button>

            </AnimatePresence>
        </nav>
    </div>

    <div className="w-screen grid grid-cols-5 grid-flow-row gap-6 px-6">
    {showCard.map((item,index) => {
        return <Card key={index} 
        checkTitleEntry={checkTitleEntry} />;
    })}
    </div>
</Font>
)
}