import React from "react";

import { ErrorTextProps } from "./types";

export const ErrorText = ({ message }: ErrorTextProps) => {
  return <sub className="text-red-600">{message}</sub>;
};
