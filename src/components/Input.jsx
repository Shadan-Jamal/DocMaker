import React,{useState,useId} from 'react'
import TextCard from './TextCard';

function Input({text,changeInput}) {
  
  // const cardId=useId();
  // const createId=()=> {
  //   setCheckTitle(cardId)
  //   console.log(checkTitle);
  // };
  
  return (
    <>
    <div
    className=" text-black p-2 rounded-lg text-sm"
  >
    <label htmlFor="title" className="text-black">Enter Title:</label>
    <input
    value={text}
    // onKeyDown={e => e.code==="Enter" && (() => setCheckTitle(cardId))}
    onChange={changeInput} 
    type="text" 
    id="title"  
    className="px-3 py-1 rounded-md hover:bg-gray-200 border-b-2 border-b-black text-black text-wrap w-full noborders bg-transparent"/>
  </div>
  {/* {checkTitle === cardId && <TextCard key={checkTitle} />} */}
  </>
  )
}

export default Input;