import React,{useState} from 'react';

function Input({readonly , setreadonly , titleHeading , setTitleHeading, checkTitleEntry, checkInput, setCheckInput}) {
  const handleKeyDown=(e)=>{
    if(e.key === "Enter"){
      setreadonly(true);
      setTitleHeading(false);
      checkTitleEntry(checkInput);
      setCheckInput('');
    }
  }
  return (
    <div
    className=" text-black p-2 rounded-lg text-sm">
    {titleHeading && <label htmlFor="title" className="text-black">Enter Title:</label>}
    <input
    value={checkInput}
    onChange={(e) => setCheckInput(e.target.value)} 
    type="text"
    onKeyDown={handleKeyDown}
    readOnly={readonly}
    autoFocus
    id="title"
    className="px-3 py-1 rounded-md hover:bg-gray-200 border-b-2 border-b-black text-black text-wrap w-full noborders bg-transparent"/>
  </div>
  )
}

export default Input;