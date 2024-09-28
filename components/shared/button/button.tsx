import { ButtonType } from "@/iterface";
import clsx from "clsx";
import React from "react";



function Button({
  children,
  cssClass,
  type,
  onClick
}: Readonly<{
  children: React.ReactNode;
  cssClass?:string;
  type?:ButtonType;
  onClick?:(e:any)=>void
}>) {
  return (
    <>
      <button
        className={clsx(cssClass,
          type ?? "text-white bg-bgPrimary hover:text-bgPrimary hover:bg-white",
          type == "CANCEL" && "text-black bg-gray-200 hover:bg-red-400 hover:text-white",
          type == "DELETE" && "text-white bg-red-400 hover:bg-white hover:text-red-400",
          type == "SAVE" && "text-black bg-gray-200 hover:bg-green-300 hover:text-white",
          type == "DEFAULT" && "text-white bg-bgPrimary hover:text-bgPrimary hover:bg-white",
          type == "EDIT" && "text-white bg-blue-300 hover:text-bgPrimary hover:bg-white",
          "rounded-md px-[10px] py-[5px]"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
