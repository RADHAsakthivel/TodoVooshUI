import React from "react";
import { Button } from "../button";

const TaskCatd = ({
  task,
  setActiveCard,
  deleteHandler,
}: {
  task: any;
  setActiveCard?: React.Dispatch<React.SetStateAction<number | null>>;
  deleteHandler: (e: any,task:any) => void;
}) => {
  return (
    <div
      className="bg-[#D2E6FA] mb-2 p-4 rounded-lg"
      onClick={()=>console.log("data")}
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
        <Button type="DELETE" cssClass=" mr-2" >Delete</Button>
        <Button type="EDIT" cssClass="mr-2" >Edit</Button>
        <Button type="DEFAULT" cssClass="" >View Details</Button>
      </div>
    </div>
  );
};
export default TaskCatd;