"use client";
import { Button } from "@/components/shared";
import { ITask } from "@/iterface";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type props={
  task:ITask;
  closeHandler:(isShowTaskDetailPopUp:boolean)=>void
}

function TaskDetail({ task, closeHandler }: props) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeHandler(false);
    }, 500);
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 h-screen w-screen flex justify-center items-center transition-opacity duration-500 ease-in-out",
        isMounted && !isClosing ? "opacity-100" : "opacity-0"
      )}
      style={{ backgroundColor: '#5F6473' }}
    >
      <div
        className={`bg-white rounded-md w-[80%] h-[80%] p-[1.5em] relative transition-transform duration-500 ease-in-out ${
          isMounted && !isClosing ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <h2>
          <b>Title</b>: {task.title}
        </h2>
        <p className="text-[16px]">Description: {task.description}</p>
        <p className="text-[14px]">Created at: {task.createdAt.toString()}</p>
        <Button
          cssClass="bg-bgPrimary p-[10px] absolute right-[20px] bottom-[20px] text-white rounded-[5px]"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default TaskDetail;
