"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import { TodoLayout } from "@/components/layout/layout";
import { Board } from "@/components/major/board";
import { DataProvider } from "@/components";
import { getTasks } from "@/services/task";
import { ClipLoader } from "react-spinners";
import { GetStaticProps } from "next";

function DashBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data);
      })
      .catch((e)=>{
        console.error("error =>",e)
      })
  }, [tasks]);
  return (
    <>
      {isLoading ? (
        <DataProvider>
          <Board />
          <div
            id="portal-root"
            className="absolute left-0 top-0 h-[100%] scroll-"
          ></div>
        </DataProvider>
      ) : (
        <ClipLoader
          color={"bgPrimary"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}

export default DashBoard;
