  import React, { useState } from "react";
  import {AnimatePresence, motion} from "framer-motion";
  import Input from "./Input";
  import "../styles.css"
import TextCard from "./TextCard";

  const Card =  () =>{
    
    return <div className="bg-red-900 text-black p-3 mt-5 rounded-lg">
    <Input />
    <TextCard />
  </div>
  };

  export default Card;