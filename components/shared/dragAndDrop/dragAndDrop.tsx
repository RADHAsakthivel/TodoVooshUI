"use client";
import React, { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Container from "./container";
import { useDataContext } from "@/components";
import { ITask, Task } from "@/iterface";
import { createTasks } from "@/services";
import {cookies} from "js-cookie"

const defaultAnnouncements = {
  onDragStart(id) {
    console.log(`Picked up draggable item ${id}.`, id);
  },
  onDragOver(id, overId) {
    if (overId) {
      console.log(
        `Draggable item ${id} was moved over droppable area ${overId}.`,
        "id =>",
        id,
        "overId =>",
        overId
      );
      return;
    }

    console.log(
      `Draggable item ${id} is no longer over a droppable area.`,
      "id =>",
      id,
      "overId =>",
      overId
    );
  },
  onDragEnd(id, overId) {
    if (overId) {
      console.log(
        `Draggable item ${id} was dropped over droppable area ${overId}`
      );
      return;
    }

    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel(id) {
    console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
  },
};

type props={
  data:ITask[]
}

export default function DragAndDrop({ data }:props) {
  const [tasks, setTasks] = useState({
    TODO: data.filter((item) => item.status === "TODO") || [new Task("TODO")],
    INPROGRESS: data.filter((item) => item.status === "INPROGRESS") || [new Task("INPROGRESS")],
    DONE: data.filter((item) => item.status === "DONE") || [new Task("DONE")],
  });
  const [activeId, setActiveId]: any = useState();
  const { data: contextData } = useDataContext();
  const { message, otherProp: editedTask } = contextData;
  useEffect(() => {
    const initialTask:ITask = editedTask?.initialTask;
    const currentTask:ITask = editedTask?.updatedTask;
    let updatedTasks = {...tasks}
    console.log("initialTask,updatedTasks=>",initialTask,updatedTasks)
    if(initialTask === null){
      //TODO:should be uuid
      const res =  createTasks(currentTask,cookies.get('userId'))
      currentTask.id = updatedTasks[currentTask.status].length.toString();
      updatedTasks[currentTask.status].push(currentTask);
      return
    }
    if(initialTask && currentTask ){
      updatedTasks[initialTask.status] = updatedTasks[initialTask.status].map((item)=>{
        if(item.id == currentTask.id) return currentTask;
        return item
      })
      setTasks(updatedTasks);
    }
  }, [editedTask,editedTask?.initalTask,editedTask?.updatedTask]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findContainer(id) {
    if (id in tasks) {
      return id;
    }
    let container;
    for (const [key, values] of Object.entries(tasks)) {
      if (values.some((item) => item.id === id)) {
        container = key;
        return container;
      }
    }
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event) {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setTasks((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const activeIndex = activeItems.findIndex((item, i) => item.id === id);
      const overIndex = overItems.findIndex((item, i) => item.id === overId);

      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect?.offsetTop > over?.rect?.offsetTop + over?.rect?.height;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }
      const updatedActiveItems = activeItems.filter(
        (item) => item.id !== activeId
      );
      const updatedOverItems = [
        ...overItems.slice(0, newIndex),
        activeItems[activeIndex],
        ...overItems.slice(newIndex),
      ];

      return {
        ...prev,
        [activeContainer]: updatedActiveItems,
        [overContainer]: updatedOverItems,
      };
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = tasks[activeContainer].findIndex(
      (item, i) => item.id === id
    );
    const overIndex = tasks[overContainer].findIndex(
      (item, i) => item.id === overId
    );

    if (activeContainer === overContainer) {
      if (activeIndex !== overIndex) {
        setTasks((tasks) => ({
          ...tasks,
          [overContainer]: arrayMove(
            tasks[overContainer],
            activeIndex,
            overIndex
          ),
        }));
      }
    } else {
      setTasks((tasks) => {
        const activeItem = tasks[activeContainer][activeIndex];
        const newActiveContainerItems = tasks[activeContainer].filter(
          (_, index) => index !== activeIndex
        );
        const newOverContainerItems = [...tasks[overContainer]];

        newOverContainerItems.splice(overIndex, 0, activeItem);

        return {
          ...tasks,
          [activeContainer]: newActiveContainerItems,
          [overContainer]: newOverContainerItems,
        };
      });
    }

    setActiveId(null);
  }

  const deleteHandler = (_, task):void => {
    const newList = { ...tasks };
    newList[task.status] = newList[task.status].filter((e) => e.id != task.id);
    setTasks(newList);
  };

  const check: any = {
    announcements: defaultAnnouncements,
  };

  return (
    <div className="flex justify-around gap-4 mt-[10px]">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="TODO" items={tasks.TODO} deleteHandler={deleteHandler} />
        <Container
          id="INPROGRESS"
          items={tasks.INPROGRESS}
          deleteHandler={deleteHandler}
        />
        <Container id="DONE" items={tasks.DONE} deleteHandler={deleteHandler} />
      </DndContext>
    </div>
  );
}
