import React from "react";
import { DropHereCard, TaskCard } from "../taskCard";

function TaskContainer({
  items,
  status,
  setActiveCard,
  onDrop,
  deleteHandler,
}: {
  items: any;
  status: string;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
  onDrop: (status: string, index: number | null, i: number) => void;
  deleteHandler: (e: any) => void;
}) {
  return (
    <div className="w-[33%] bg-white p-2 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
      <div className="bg-bgPrimary text-white rounded-[2px] p-[5px] mb-2">
        <p>
          <b>{status.toUpperCase()}</b>
        </p>
      </div>
      <div>
        {items.map(
          (item, i) =>
            item.status === status && (
              <div key={i}>
                <DropHereCard onDrop={() => onDrop(status, item.id, i)} />
                <TaskCard
                  task={item}
                  setActiveCard={setActiveCard}
                  deleteHandler={deleteHandler}
                />
              </div>
            )
        )}
        <DropHereCard
          onDrop={() => onDrop(status, null, items.length ? items.length : 0)}
        />
      </div>
    </div>
  );
}

export default TaskContainer;
