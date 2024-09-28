"use client";
import React, { useState } from "react";
import {
  Bounded,
  Button,
  DragAndDrop,
  Portal,
  SearchBar,
  useDataContext,
} from "@/components";
import { ITask, Task } from "@/iterface";
import { TaskAdd } from "@/components";

const mock:ITask[] = [
  {
    id: "1",
    title: "dummy1",
    description: "Do something nice for someone you care about",
    status: "DONE",
    orderId: 0,
    createdAt: new Date().toDateString(),
  },
  {
    id: "2",
    title: "dummy1",
    description: "Memorize a poem",
    status: "INPROGRESS",
    orderId: 0,
    createdAt: new Date().toDateString(),
  },
  {
    id: "3",
    title: "dummy1",
    description: "Watch a classic movie",
    status: "TODO",
    orderId: 0,
    createdAt: new Date().toDateString(),
  },
  {
    id: "4",
    title: "dummy1",
    description: "Watch a documentary",
    status: "INPROGRESS",
    orderId: 1,
    createdAt: new Date().toDateString(),
  },
  {
    id: "5",
    title: "dummy1",
    description: "Invest in cryptocurrency",
    status: "TODO",
    orderId: 1,
    createdAt: new Date().toDateString(),
  },
  {
    id: "6",
    title: "dummy1",
    description:
      "Contribute code or a monetary donation to an open-source software project",
    status: "INPROGRESS",
    createdAt: new Date().toDateString(),
    orderId: 2,
  },
  {
    id: "7",
    title: "dummy1",
    description: "Solve a Rubik's cube",
    status: "DONE",
    orderId: 1,
    createdAt: new Date().toDateString(),
  },
];

function Board() {
  const [showAddTask, setShowAddTask] = useState(false);
  const { updateData } = useDataContext();

  const dndKitShowHandler = (isShowDrag: boolean): void => {
    updateData({
      message: "dndKitDrag",
      otherProp: { dndKitDrag: isShowDrag },
    });
  };

  const addTaskCloseHandler = (hideTaskDetail: boolean): void => {
    setShowAddTask(hideTaskDetail);
    document.body.style.overflow = "auto";
    dndKitShowHandler(true);
  };
  const addTaskOpenHandler = (e: any): void => {
    e
    setShowAddTask(true);
  };
  const createTask = (): ITask => {
    return new Task();
  };
  return (
    <>
      <Bounded>
        <div className="mt-[20px]" onClick={addTaskOpenHandler}>
          <Button type="DEFAULT">Add Task</Button>
        </div>
        <SearchBar />
        <DragAndDrop data={mock} />
      </Bounded>
      <Portal>
        {showAddTask && (
          <TaskAdd task={createTask()} cancelHandler={addTaskCloseHandler} />
        )}
      </Portal>
    </>
  );
}

export default Board;
