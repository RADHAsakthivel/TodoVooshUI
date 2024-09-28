"use client";
import React, { useState } from "react";
import { Button } from "../../button";
import { Portal } from "../../portals";
import { TaskDetail, TaskEdit } from "@/components";
import { useDataContext } from "../../context";
import { Task } from "@/iterface";

type props = {
  task: Task;
  deleteHandler: (e: any, task: Task) => void;
};

const TaskCard = ({ task, deleteHandler }: props) => {
  const { updateData } = useDataContext();
  const [showTaskDetail, setShowTaskDetail] = useState(false);
  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const dndKitShowHandler = (isShowDrag: boolean): void => {
    updateData({
      message: "dndKitDrag",
      otherProp: { dndKitDrag: isShowDrag },
    });
  };

  const editHandler = (e: any): void => {
    setShowTaskEdit(true);
    document.body.style.overflow = "hidden";
    dndKitShowHandler(false)
  };

  const viewDetailHandler = (e: any): void => {
    setShowTaskDetail(true);
    document.body.style.overflow = "hidden";
    dndKitShowHandler(false)
  };

  const taskDetailCloseHandler = (hideTaskDetail: boolean): void => {
    setShowTaskDetail(hideTaskDetail);
    document.body.style.overflow = "auto";
    dndKitShowHandler(true)
  };

  const taskEditCloseHandler = (hideTaskDetail: boolean): void => {
    setShowTaskEdit(hideTaskDetail);
    document.body.style.overflow = "auto";
    dndKitShowHandler(true)
  };

  return (
    <div className="bg-[#D2E6FA] mb-2 p-4 rounded-lg" draggable>
      <p>
        <strong>Task {task.id}</strong>
      </p>
      <p>Description : {task.description}</p>
      <p className="text-[14px] mt-8 mb-2">
        created at : {task.createdAt.toString()}
      </p>
      <div className="flex justify-end">
        <Button
          onClick={(e) => deleteHandler(e, task)}
          type="DELETE"
          cssClass=" mr-2"
        >
          Delete
        </Button>
        <Button onClick={editHandler} type="EDIT" cssClass="mr-2">
          Edit
        </Button>
        <Button onClick={viewDetailHandler} type="DEFAULT" cssClass="">
          View Details
        </Button>
      </div>
      <Portal>
        {showTaskEdit && (
          <TaskEdit task={task} cancelHandler={taskEditCloseHandler} />
        )}
        {showTaskDetail && (
          <TaskDetail task={task} closeHandler={taskDetailCloseHandler} />
        )}
      </Portal>
    </div>
  );
};
export default TaskCard;
//   const modalRef = useRef<HTMLDivElement>(null);
//   const [formValues, setFormValues] = useState(task);
//   const [isClosing, setIsClosing] = useState(false);

//   useEffect(() => {
//     if (modalRef.current) {
//       modalRef.current.focus(); // Focus the modal when it mounts
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClose = (e) => {
//     e.stopPropagation(); // Prevent click event from bubbling
//     setIsClosing(true);
//     setTimeout(() => {
//       onCancel();
//     }, 500);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
//         isClosing ? "opacity-0" : "opacity-100"
//       }`}
//       onClick={handleClose} // Close modal on background click
//     >
//       <div
//         ref={modalRef} // Set reference to the modal
//         tabIndex={-1} // Make the modal focusable
//         className={`bg-white rounded-md w-[80%] max-w-md p-4 relative transition-transform duration-500 ${
//           isClosing ? "scale-50 opacity-0" : "scale-100 opacity-100"
//         }`}
//         onClick={(e) => e.stopPropagation()} // Prevent clicks in modal from closing it
//       >
//         <h2 className="text-xl font-bold">Edit Task</h2>
//         <div className="mt-4">
//           <label className="block text-sm mb-1">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formValues.title || ""}
//             onChange={handleInputChange}
//             placeholder="Task Title"
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>
//         <div className="mt-4">
//           <label className="block text-sm mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formValues.description || ""}
//             onChange={handleInputChange}
//             placeholder="Task Description"
//             className="w-full border border-gray-300 p-2 rounded"
//             rows={4}
//           />
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//             onClick={() => {
//               onSave(formValues);
//               handleClose(new MouseEvent("click"));
//             }}
//           >
//             Save
//           </button>
//           <button
//             className="bg-gray-300 text-black px-4 py-2 rounded"
//             onClick={handleClose}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
