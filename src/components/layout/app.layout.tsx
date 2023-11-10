import { FC } from "react";
import { ChildrenProps } from "../../types";

export const AppLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="px-6 pt-2 font-extrabold">
      <section className="drop-shadow-2xl bg-slate-200 rounded-lg">
        {children}
      </section>
    </main>
  );
};
