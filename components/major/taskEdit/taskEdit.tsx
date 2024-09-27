import { Button } from '@/components/shared'
import React from 'react'
import {ButtonType} from "../../../iterface"

function TaskEdit({task}:any) {
  return (
    <div className='bg-[#5F6473] h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className='bg-white  rounded-md w-[80%] h-[80%] p-[1.5em] relative '>
            <h2 className=''><b>Edit Task</b></h2>
            <div>
                <label className='ml-[7px] mt-[20px]'>Title</label>
                <input type='text' value={task.title || "Title"} placeholder='Task Title' className='w-full border-b-2 p-2 focus-visible:bg-sky-50 focus-visible:outline-none focus-visible:border-b-2  rounded-t-md'/>
            </div>
            <div className='mt-[20px]'>
                <label className='ml-[7px]' name="description">Description</label>
                <textarea name="description" type='text' value={task.title || "Title"} placeholder='Task Title' className='w-full border-b-2 p-2 focus-visible:bg-sky-50 focus-visible:outline-none focus-visible:border-b-2 rounded-t-md'/>
            </div>
            <div className='absolute right-[20px] bottom-[20px] text-white rounded-[5px]'>
                <Button cssClass='mr-2' type="SAVE" onClick={()=>console.log("e")}>Save</Button>
                <Button cssClass='mr-2' type="CANCEL" onClick={()=>console.log("e")}>Delete</Button>
            </div>
        </div>
    </div>
  )
}

export default TaskEdit