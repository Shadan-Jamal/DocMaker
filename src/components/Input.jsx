import React,{useState} from 'react'

function Input() {
    const [checkInput,setCheckInput]=useState('');
    const [checkTitle,setCheckTitle]=useState('');
  return (
    <div
    className=" text-black p-3 rounded-lg text-sm"
  >
    <label htmlFor="title" className="text-black">Enter Title:</label>
    <input
    value={checkInput}
    onKeyDown={e => setCheckTitle(e.code)}
    onChange={e => setCheckInput(e.target.value)} 
    type="text" 
    id="title"  
    className="px-3 py-1 rounded-lg hover:bg-gray-200 border-b-2 border-b-black text-black w-full noborders bg-transparent"/>
  </div>
  )
}

export default Input;