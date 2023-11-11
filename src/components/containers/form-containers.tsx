import { FC } from "react";
import { ChildrenProps } from "../../types";

export const FormContainer: FC<ChildrenProps> = ({ children }) => {
  return (
    <section className="flex flex-col gap-2 w-full drop-shadow-2xl">
      {children}
    </section>
  );
};
