import React, { useEffect, useState } from "react";
import Font from "react-font";
import Card from "./Card";
import {FaPlus,FaMagnifyingGlass} from "react-icons/fa6";
import {motion,AnimatePresence} from "framer-motion";

export default function Main() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [searchField, showSearchField] = useState(false);
    const [titles, setTitles] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [removeCard,setRemoveCard] = useState(false);

    const openSearch = () => {
        showSearchField(!searchField);
    };

    const handleClick = () => {
        const newCard = { id: cards.length, title: `Card ${cards.length+1}` };
        setCards((prevCards) => [...prevCards, newCard]);
        setFilteredCards((prevCards) => [...prevCards, newCard]);
        };
        
    const checkTitleEntry = (title) => {
        setTitles([...titles, title]);
    };

    const handleSearchQuery = (input) => {
        setSearchInput(input);
        if (input === '') {
            setFilteredCards(cards);
        } else {
            setFilteredCards(cards.filter(card => card.title.toLowerCase().includes(input.toLowerCase())));
        }
    };

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

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
                                initial={{scale: 0, backgroundColor: "black"}}
                                animate={{scale: 1, backgroundColor: "black"}}
                                exit={{scale: 0, backgroundColor: "black"}}
                                transition={{duration: 0.2}}
                                placeholder="Search the note..."
                                value={searchInput}
                                onChange={(e) => handleSearchQuery(e.target.value)}
                                autoFocus 
                                className="text-base p-2 rounded text-white focus:border-red-500">
                            </motion.input>
                        }
                    </AnimatePresence>
                </nav>
            </div>

            <div className="w-screen grid grid-cols-5 grid-flow-row gap-6 px-6">
                {filteredCards.map((item, index) => {
                    return <Card key={item.id} checkTitleEntry={checkTitleEntry} title={item.title} />;
                })}
            </div>
        </Font>
    );
}