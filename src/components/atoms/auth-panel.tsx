import React, { Children } from "react";

import { AuthPanelProps } from "./types";

export const AuthPanel = ({ children, className }: AuthPanelProps) => {
  return (
    <section className={`auth-panel bg-[#060606] rounded-3xl ${className}`}>
      {children}
    </section>
  );
};
