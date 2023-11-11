import React from "react";
import { useField } from "formik";

import { InputProps } from "../atoms/types";
import { ErrorText } from "@project/components";

export const InputField = ({ placeholder, color, ...props }: InputProps) => {
  let styles = "";
  styles = props.label
    ? "bg-transparent border-2 border-gray-300"
    : "border-none";

  const [field] = useField(props.name);

  return (
    <section className="flex flex-col gap-2">
      {props.label && (
        <label className="text-white mb-1 pl-1" htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <input
        {...field}
        type={props.type || "text"}
        className={`${props.name} text-${color} w-96 rounded-lg py-2 px-3 placeholder:text-center placeholder:font-extrabold placeholder:text-gray-500 ${styles} ${props.className}}`}
        placeholder={props.label ? "" : placeholder}
      />
      {props.hasError && (
        <ErrorText message={`${props.errorMsg || "Oops inavlid input"}`} />
      )}
    </section>
  );
};
