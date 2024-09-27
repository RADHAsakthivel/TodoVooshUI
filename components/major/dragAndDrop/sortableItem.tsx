import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskCard } from "../../shared/taskCard";
import { Button } from "../../shared/button";
import clsx from "clsx";

export function Item(props) {
  const { id } = props;

  const style = {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "10px 0",
    background: "white",
  };

  return <div style={style}>{id}</div>;
}

export default function SortableItem(props) {
  const { id, item, deleteHandler } = props;
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

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={clsx(
          "rounded-lg w-full h-auto bg-blue-300",
          isDragging ? "opacity-[0.8]" : "opacity-[1]",
        )}
      >
        <TaskCard task={item} deleteHandler={deleteHandler} />
      </div>
    </>
  );
}
