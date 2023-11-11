import { ChildrenProps } from "../../common/types";
import { Breadcrumb, Nav } from "../atoms";

export const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Nav />
      <section className="w-screen h-screen pt-6 px-12">
        <Breadcrumb />
        {children}
      </section>
    </>
  );
};
