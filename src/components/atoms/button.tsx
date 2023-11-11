import React from "react";
import { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  shape = "rounded",
  children,
  onClick,
  type = "submit",
}) => {
  let shapeClasses = "";

  switch (shape) {
    case "rounded":
      shapeClasses = "rounded-full";
      break;
    case "square":
      shapeClasses = "rounded-none";
      break;
    case "none":
      shapeClasses = "";
      break;
    case "outline-rounded":
      shapeClasses = "rounded-full border border-blue-500";
      break;
    case "outline-square":
      shapeClasses = "rounded-none border border-blue-500";
      break;
    default:
      shapeClasses = "rounded-full";
      break;
  }

  return (
    <button
      type={type}
      className={`p-2 bg-blue-500 text-white ${shapeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
