"use client"
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { Heading, useDataContext } from "@/components"
import SortableItem from "./sortableItem";
import { ITask } from "@/iterface";

type props={
  id:string;
  items:ITask[],
  deleteHandler:(e:any,task:ITask)=>void
}

export default function Container(props:props) {
  const { id, items, deleteHandler } = props;
  const {data} = useDataContext()
  const { setNodeRef } = useDroppable({
    id
  });

  const listenersStateHandler = ():boolean =>{
    if(data.otherProp?.dndKitDrag != undefined && data.otherProp?.dndKitDrag != null) return data.otherProp?.dndKitDrag
    return true
  }

  return (
    <div className="w-[33%] bg-white p-2 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
      <Heading text={id} />
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div 
      ref={setNodeRef} 
      >
        {items.map((item,i) => (
          <SortableItem key={item.id} id={item.id} item={item} deleteHandler={deleteHandler} listenersState={listenersStateHandler()}/>
        ))}
      </div>
    </SortableContext>
    </div>
  );
}
