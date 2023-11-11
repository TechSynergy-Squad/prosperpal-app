import { ReactNode } from "react";

let { Breadcrumb } = await import("../atoms");

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Breadcrumb />
      <section className="w-screen h-screen flex justify-center items-center bg-app-">
        {children}
      </section>
    </>
  );
};
