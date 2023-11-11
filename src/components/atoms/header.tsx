import React from "react";

import { HeaderProps } from "./types";

export const Header = ({ title, className }: HeaderProps) => {
  return <h1 className={className}>{title}</h1>;
};

