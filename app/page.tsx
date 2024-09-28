// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// "use client";
// import React, { useEffect, useState, useRef } from "react";

// const TaskEdit = ({ task, onSave, onCancel }) => {
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

// const TaskCard = ({ task }) => {
//   const [showTaskEdit, setShowTaskEdit] = useState(false);

//   const editHandler = () => {
//     setShowTaskEdit(true);
//     document.body.style.overflow = "hidden"; // Prevent scrolling
//   };

//   const saveHandler = (updatedTask) => {
//     setShowTaskEdit(false);
//     document.body.style.overflow = "auto"; // Restore scrolling
//   };

//   const cancelHandler = () => {
//     setShowTaskEdit(false);
//     document.body.style.overflow = "auto"; // Restore scrolling
//   };

//   return (
//     <div className="bg-[#D2E6FA] mb-2 p-4 rounded-lg">
//       <p>
//         <strong>Task {task.id}</strong>
//       </p>
//       <p>Description: {task.description}</p>
//       <div className="flex justify-end">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={editHandler}
//         >
//           Edit
//         </button>
//       </div>
//       {showTaskEdit && (
//         <TaskEdit
//           task={task}
//           onSave={saveHandler}
//           onCancel={cancelHandler}
//         />
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const task = { id: 1, title: "Sample Task", description: "Task Description" };

//   return (
//     <div className="p-4">
//       <TaskCard task={task} />
//     </div>
//   );
// };

// export default App;


// pages/tasks.js


import React from 'react';
import "./globals.css"

const TaskPage = () => {
  return (
    <section>
    <div className="flex flex-col h-[100vh] bg-white">
      {/* Background SVG Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-[90%] overflow-hidden">
        <svg
          className="absolute bottom-0 z-0"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64L30 85.3C60 107 120 149 180 144C240 139 300 85 360 69.3C420 53 480 75 540 101.3C600 128 660 160 720 165.3C780 171 840 149 900 144C960 139 1020 149 1080 149.3C1140 149 1200 139 1260 133.3C1320 128 1380 128 1410 128L1440 128L1440 320L1410 320C1380 320 1320 320 1260 320C1200 320 1140 320 1080 320C1020 320 960 320 900 320C840 320 780 320 720 320C660 320 600 320 540 320C480 320 420 320 360 320C300 320 240 320 180 320C120 320 60 320 30 320H0V64Z"
            fill="#1E40AF"
          />
        </svg>
      </div>

      <div className="flex items-start justify-start p-10 relative z-10">
        <h1 className="text-5xl font-bold text-blue-600">Welcome, User!</h1>
      </div>
    </div>
      </section>
  );
};

export default TaskPage;
