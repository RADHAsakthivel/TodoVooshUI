import React, { useState } from "react";
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

export default function DragAndDrop({ data }: any) {
  const [items, setItems] = useState({
    TODO: data.filter((item) => item.status === "TODO"),
    INPROGRESS: data.filter((item) => item.status === "INPROGRESS"),
    DONE: data.filter((item) => item.status === "DONE"),
    root: [],
  });
  const [activeId, setActiveId]: any = useState();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }
    let container;
    for (const [key, values] of Object.entries(items)) {
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

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const activeIndex = activeItems.findIndex((item,i)=>item.id===id);
      const overIndex = overItems.findIndex((item,i)=>item.id===overId);

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
      const updatedActiveItems = activeItems.filter((item) => item.id !== activeId);
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

    const activeIndex = items[activeContainer].findIndex((item,i)=>item.id===id);
    const overIndex = items[overContainer].findIndex((item,i)=>item.id===overId);

    if (activeContainer === overContainer) {
      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
        }));
      }
    } else {
      setItems((items) => {
        const activeItem = items[activeContainer][activeIndex];
        const newActiveContainerItems = items[activeContainer].filter((_, index) => index !== activeIndex);
        const newOverContainerItems = [...items[overContainer]];
        
        newOverContainerItems.splice(overIndex, 0, activeItem);
  
        return {
          ...items,
          [activeContainer]: newActiveContainerItems,
          [overContainer]: newOverContainerItems,
        };
      });
    }

    setActiveId(null);
  }

  const deleteHandler = (_,task) =>{
    const newList = {...items}
    newList[task.status] = newList[task.status].filter(e => e.id != task.id);
    setItems(newList);
  }

  const check: any = {
    announcements: defaultAnnouncements,
  };

  return (
    <div className="flex justify-around gap-4 mt-[10px]">
      <DndContext
        // accessibility={check}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="TODO" items={items.TODO} deleteHandler={deleteHandler}/>
        <Container id="INPROGRESS" items={items.INPROGRESS} deleteHandler={deleteHandler}/>
        <Container id="DONE" items={items.DONE} deleteHandler={deleteHandler}/>
        {/* <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay> */}
      </DndContext>
    </div>
  );
}
