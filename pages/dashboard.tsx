import SearchBar from '@/components/searchBar/searchBar'
import React from 'react'
import "@/styles/globals.css"
import { DragAndDrop } from '@/components/dragAndDrop'
const mock = {
    "column-1": {
      title: "To Do",
      items: [
        { id: "task-1", content: "Task 1" },
        { id: "task-2", content: "Task 2" },
        { id: "task-3", content: "Task 3" },
        { id: "task-4", content: "Task 4" },
        { id: "task-5", content: "Task 5" },
      ],
    },
    "column-2": {
      title: "In Progress",
      items: [
        { id: "task-6", content: "Task 6" },
        { id: "task-7", content: "Task 7" },
        { id: "task-8", content: "Task 8" },
        { id: "task-9", content: "Task 9" },
        { id: "task-10", content: "Task 10" },
      ],
    },
  }

const mockTwo = [
  {
    id: 1,
    description: "Do something nice for someone you care about",
    status: "DONE",
    userId: 152,
    orderId: 0,
  },
  {
    id: 2,
    description: "Memorize a poem",
    status: "INPROGRESS",
    userId: 13,
    orderId: 0,
  },
  {
    id: 3,
    description: "Watch a classic movie",
    status: "TODO",
    userId: 68,
    orderId: 0,
  },
  {
    id: 4,
    description: "Watch a documentary",
    status: "INPROGRESS",
    userId: 84,
    orderId: 1,
  },
  {
    id: 5,
    description: "Invest in cryptocurrency",
    status: "TODO",
    userId: 163,
    orderId: 1,
  },
  {
    id: 6,
    description:
      "Contribute code or a monetary donation to an open-source software project",
    status: "INPROGRESS",
    userId: 69,
    orderId: 2,
  },
  {
    id: 7,
    description: "Solve a Rubik's cube",
    status: "DONE",
    userId: 76,
    orderId: 1,
  },
];


function DashBoard() {
  return (
    <>
        <SearchBar/>
        <DragAndDrop data={mock} />
    </>
  )
}

export default DashBoard