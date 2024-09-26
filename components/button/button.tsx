import clsx from "clsx";
import React from "react";

function Button({
  children,
  cssClass,
  onClick
}: Readonly<{
  children: React.ReactNode;
  cssClass:string
  onClick?:()=>void
}>) {
  return (
    <>
      <button
        className={cssClass}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
