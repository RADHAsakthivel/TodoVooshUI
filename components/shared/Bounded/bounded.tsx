import clsx from "clsx";
import React, { ReactNode } from "react";

function Bounded({
  children,
  cssClass,
}: Readonly<{
  children: React.ReactNode;
  cssClass?:string
}>) {
  return (
    <section>
      <div className={clsx("px-10 py-4",cssClass)}>{children}</div>
    </section>
  );
}

export default Bounded;
