import { ChildrenProps } from "../../types";

export const AuthLayout = ({ children }: ChildrenProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </section>
  );
};
