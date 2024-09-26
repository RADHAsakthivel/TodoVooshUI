import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortableItem";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1
};

export default function Container(props) {
  console.log("container =>",props);
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <>
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id,i) => (
          <SortableItem key={id} id={id} />
          // <div key={i}/>
        ))}
      </div>
    </SortableContext>
    </>
  );
}
