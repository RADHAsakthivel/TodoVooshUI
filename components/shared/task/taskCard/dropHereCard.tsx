"use client"
import React, { useState } from "react";

function DropHereCard({onDrop}:{onDrop:()=>void}) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      onDragEnter={() =>{
        setShowDrop(true)
      }}
      onDragLeave={() => {
        setShowDrop(false)
    }}
    onDrop={()=>{
        onDrop();
        setShowDrop(false);
    }}
    onDragOver={(e)=>{
        e.preventDefault();
    }}
    className={`
        ${showDrop ? "w-[100%] h-[100px] transition-all duration-100 ease-in-out mb-[10px]" : " h-[10px] opacity-0"} 
       bg-gray-200 border border-dashed border-gray-400 rounded-md flex items-center justify-center`}
    >
      {showDrop && "Drop Here"}
    </div>
  );
}

export default DropHereCard;
