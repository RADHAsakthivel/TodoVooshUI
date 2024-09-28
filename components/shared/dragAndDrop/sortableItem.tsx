"use client"
import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskCard } from "../task/taskCard";
import { Button } from "../button";
import clsx from "clsx";
import { ITask } from "@/iterface";

// export function Item(props) {
//   const { id } = props;

//   const style = {
//     width: "100%",
//     height: 50,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "1px solid black",
//     margin: "10px 0",
//     background: "white",
//   };

//   return <div style={style}>{id}</div>;
// }

type props = {
  id:string;
  item:ITask;
  deleteHandler:(e:any,task:ITask)=>void
  listenersState:boolean
}

export default function SortableItem(props:props) {
  const { id, item, deleteHandler, listenersState } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let dragListners = listenersState ? listeners : {};
  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...dragListners}
        aria-describedby={id} 
        className={clsx(
          "rounded-lg w-full h-auto bg-blue-300",
          isDragging ? "opacity-[0.8]" : "opacity-[1]",
        )}
      >
        <TaskCard task={item} deleteHandler={deleteHandler}/>
      </div>
    </>
  );
}
