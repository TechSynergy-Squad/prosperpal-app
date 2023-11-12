import { FC } from "react";
import { ChildrenProps } from "../../types";

export interface PanelProps extends ChildrenProps {
  bgColor?: string;
}

export const Panel: FC<PanelProps> = ({ children, bgColor = "bg-white" }) => {
  return (
    <div
      className={`${bgColor} rounded-lg border-t-[0.2px] border-opacity-25 p-6 drop-shadow-xl`}
    >
      {children}
    </div>
  );
  s;
};
