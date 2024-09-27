import { Button } from '@/components/shared';
import React from 'react'

function TaskDetail({task}:any) {
  return (
    <div className='bg-[#5F6473] h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className='bg-white  rounded-md w-[80%] h-[80%] p-[1.5em] relative '>
            <h2><b>Title</b>:{task.title}</h2>
            <p className='text-[16px]'>Description: {task.description}</p>
            <p className='text-[14px]'>Created at : {task.createAt}</p>
            <Button cssClass='bg-bgPrimary p-[10px] absolute right-[20px] bottom-[20px] text-white rounded-[5px]' onClick={()=>console.log("e")}>Close</Button>
        </div>
    </div>
  )
}

export default TaskDetail;