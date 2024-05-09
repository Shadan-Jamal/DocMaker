import React, { useState } from "react";
import Font from "react-font";
import {FaPlus} from "react-icons/fa6";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaXmark} from "react-icons/fa6";
import {motion,AnimatePresence} from "framer-motion";
import Popupcard from "./Popupcard";

export default function Nav(){
    const [showPopup,setShowPopup]=useState(false);
    return (
        <Font family="Poetsen One">
            <header className="text-white font-bold h-16 text-start px-4 py-3 text-3xl tracking-wider bg-gray-700">DocMaker</header>
            <div className="w-screen h-14 flex flex-row justify-start items-center gap-6 bg-white border-t-2 border-t-black">
                <motion.button 
                className="rounded-full p-3 transition-colors hover:bg-gray-600/50 ms-4"
                onClick={() => setShowPopup(!showPopup)}><FaPlus size={"20px"} />
                </motion.button>

                <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaMagnifyingGlass size={"20px"} />
                </motion.button>

                <motion.button className="rounded-full p-3 transition-colors hover:bg-gray-600/50"><FaXmark size={"22px"} />
                </motion.button>
            </div>
            {showPopup && <Popupcard/>}
        </Font>
    )
}