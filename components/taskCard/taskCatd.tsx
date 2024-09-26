import React from "react";
import { Button } from "../button";

function TaskCatd({
  task,
  setActiveCard,
  deleteHandler
}: {
  task:any;
  setActiveCard:React.Dispatch<React.SetStateAction<number | null>>;
  deleteHandler:(e:any)=>void
}) {
  // console.log(task)
  return (
    <div
      className="bg-[#D2E6FA] mb-2 p-4 rounded-md"
      onDragStart={() => {
        setActiveCard(task.id);
      }}
      onDragEnd={() => {
        setActiveCard(null);
      }}
      draggable
    >
      <p>
        <strong>Task {task.id}</strong>
      </p>
      <p>Description : {task.description}</p>
      <p className="text-[14px] mt-8 mb-2">
        created at : {new Date().toDateString()}
      </p>
      <div className="flex justify-end">
        <Button cssClass="px-[6px] mx-[4px] bg-red-500 rounded-[5px] text-white " onClick={()=>deleteHandler(task.id)}>
          Delete
        </Button>
        <Button cssClass="px-[6px] mx-[4px] bg-blue-400 rounded-[5px] text-white ">
          Edit
        </Button>
        <Button cssClass="px-[6px] mx-[4px] bg-bgPrimary rounded-[5px] text-white ">
          View Detail
        </Button>
      </div>
    </div>
  );
}
export default TaskCatd;
