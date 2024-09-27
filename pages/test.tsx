import React from 'react'
import { TaskDetail,TaskEdit } from "@/components/major";
import "../styles/globals.css"

export default function Test() {
  const task = {
    id: 1,
    description: "Do something nice for someone you care about",
    status: "DONE",
    userId: 152,
    orderId: 0,
  }
  return (
    <>
        <TaskEdit task={task} />
        {/* <div>test</div> */}
    </>
  )
}
