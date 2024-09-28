import clsx from "clsx";
import React from "react";

type props = {
  onChange: (e) => void;
  id: string;
  name: string;
  type: string;
  placeHolder: string;
//   value?: any;
  required: boolean;
  cssClass?:string
};
function Input({
  id,
  name,
  type,
  placeHolder,
  required,
//   value,
  onChange,
  cssClass
}: props) {
  return (
    <React.Fragment>
      {required ? (
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          required
          placeholder={placeHolder}
        //   value={value}
          className={clsx("w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",cssClass)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeHolder}
        //   value={value}
          className={clsx("w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",cssClass)}
        />
      )}
    </React.Fragment>
  );
}

export default Input;
