"use client";
import { Button } from "@/components/shared";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../..";
import { ITask } from "@/iterface";
import {createTasks} from "@/services"
import { cookies } from "js-cookie";

type props = {
  task: ITask;
  cancelHandler: (isTaskEditorShow: boolean) => void;
};

function TaskAdd({ task, cancelHandler }: props) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormValues] = useState(task);
  const { updateData: usecontextUpdate } = useDataContext();

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {});

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      cancelHandler(false);
    }, 500);
  };

  const setFormDetails = (e) => {
    e.preventDefault();
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setFormValues((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));
  };

  const saveHandler = async(e) => {
    const finalContext = {
      message: "Edited task",
      otherProp: { initialTask: null, updatedTask: formData },
    };
    usecontextUpdate(finalContext);
    handleClose();
  };

  return (
    <div
      className={`bg-[#5F6473] fixed top-0 left-0 h-screen w-screen flex justify-center items-center transition-opacity duration-500 ease-in-out ${
        isMounted && !isClosing ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-md w-[80%] h-[80%] p-[1.5em] relative transition-transform duration-500 ease-in-out ${
          isMounted && !isClosing
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      >
        <h2>
          <b>Edit Task</b>
        </h2>
        <form>
          <div className="mt-[20px]">
            <label className="ml-[7px] mt-[20px] text-sm">Title</label>
            <input
              required
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={setFormDetails}
              placeholder="Task Title"
              className="w-full text-lg border-b-2 p-2 focus-visible:bg-sky-50 focus-visible:outline-none focus-visible:border-b-2 rounded-t-md"
            />
          </div>
          <div className="mt-[20px]">
            <label className="ml-[7px] text-sm">Description</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={setFormDetails}
              placeholder="Task Description"
              required
              className="w-full text-lg border-b-2 p-2 focus-visible:bg-sky-50 focus-visible:outline-none focus-visible:border-b-2 rounded-t-md"
            />
          </div>
          <div className="mt-[20px] bg-slate-500 rounded-lg">
            <select
              className="appearance-none border w-full border-gray-300 rounded-md px-4 py-2 focus:border-blue-500"
              value={"TODO"}
              name="status"
              required
              onChange={setFormDetails}
            >
              <option id="add_task_todo" className="bg-white">
                TODO
              </option>
              <option id="add_task_inprogress" className="bg-white">
                INPROGRESS
              </option>
              <option id="add_task_done" className="bg-white">
                DONE
              </option>
            </select>
          </div>
          <div className="absolute right-[20px] bottom-[20px] text-white rounded-[5px]">
            <Button
              cssClass="mr-2"
              type="SAVE"
              onClick={() => saveHandler(formData)}
            >
              Save
            </Button>
            <Button cssClass="mr-2" type="CANCEL" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskAdd;
