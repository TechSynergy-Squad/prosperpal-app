import React from "react";

import { ChildrenProps } from "../types";

export const FormBodyContainer: React.FC<ChildrenProps> = ({ children }) => (
  <div className="grid grid-cols-1 gap-5 rounded-lg bg-white-background p-4 drop-shadow-2xl">
    {children}
  </div>
);
