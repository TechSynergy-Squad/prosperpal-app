import { ChildrenProps } from "../../common/types";
import { Nav } from "../atoms";

export const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <main className="flex">
      <Nav />
      <section className="w-screen h-screen pt-6 px-12 bg-app-background bg-cover bg-center">
        {children}
      </section>
    </main>
  );
};
