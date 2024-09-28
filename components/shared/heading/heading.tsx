import React from 'react'

function Heading({text}:{text:string}) {
  return (
    <div className='bg-[#5596F5] p-2 text-white my-[10px] rounded-md'>{text}</div>
  )
}

export default Heading