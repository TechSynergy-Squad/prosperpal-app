import { FC } from "react";

import { ChildrenProps } from "../../types";

export const Header: FC<ChildrenProps> = ({ children }) => {
  return (
    <header className="pb-2">
      <h4 className="text-xl">{children}</h4>
      <div className="h-1 w-8 rounded-sm bg-gradient-to-r from-primary to-secondary" />
    </header>
  );
};
