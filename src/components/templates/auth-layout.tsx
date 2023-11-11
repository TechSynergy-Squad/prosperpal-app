import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center bg-app-background bg-cover bg-center">
        {children}
      </section>
    </>
  );
};
