import React,{useState,useId} from 'react'
import TextCard from './TextCard';

function Input() {
  const [checkInput,setCheckInput]=useState('');
  const [checkTitle,setCheckTitle]=useState(false);
  const cardID= useId();
  function createId(){
    return cardID;
  }
  

  return (
    <>
    <div
    className=" text-black p-2 rounded-lg text-sm"
  >
    <label htmlFor="title" className="text-black">Enter Title:</label>
    <input
    value={checkInput}
    onKeyDown={e => e.code==="Enter" && (setCheckTitle(true),createId())}
    onChange={e => setCheckInput(e.target.value)} 
    type="text" 
    id="title"  
    className="px-3 py-1 rounded-md hover:bg-gray-200 border-b-2 border-b-black text-black text-wrap w-full noborders bg-transparent"/>
  </div>
  {checkTitle && <TextCard key={cardID}/>}
  </>
  )
}

export default Input;