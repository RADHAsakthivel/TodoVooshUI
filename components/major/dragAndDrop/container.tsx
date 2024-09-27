import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortableItem";

export default function Container(props) {
  const { id, items, deleteHandler } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div className="w-[33%] bg-white p-2 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div 
      ref={setNodeRef} 
      >
        {items.map((item,i) => (
          <SortableItem key={item.id} id={item.id} item={item} deleteHandler={deleteHandler}/>
        ))}
      </div>
    </SortableContext>
    </div>
  );
}
