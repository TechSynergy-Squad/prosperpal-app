import { MdEmail } from "react-icons/md";

import { Panel, Avatar } from "../atoms";
import { UserPanelProps } from "./types";

export const UserPanel = ({ userDetails }: UserPanelProps) => {
  const userDefault = {
    name: "John Doe",
    job: "Software Engineer",
    email: "john@doe.com",
    profile: "https://picsum.photos/200",
  };
  const { name, job, ...rest } = userDetails;

  return (
    <Panel>
      <section className="user-panel px-2 w-[400px] relative ">
        <section className="email absolute   left-4 top-20 ">
          <a
            className="border-2 p-2 rounded-full border-gray-600 inline-block"
            href={`mail-to:${rest.email || userDefault.email}`}
          >
            <MdEmail size="1.3rem" color="#5e5f63" />
          </a>
        </section>
        <section className="user-info flex flex-col gap-6 items-center">
          <section className="avatar">
            <Avatar
              imgSrc={rest.profile || userDefault.profile}
              onlineStatus="Online"
            />
          </section>
          <section className="user-details flex flex-col items-center gap-2">
            <section className="name">
              <p>{name}</p>
            </section>
            <section className="job">
              <p className="text-[#3d3e42] text-xs">{job}</p>
            </section>
          </section>
        </section>
      </section>
    </Panel>
  );
};
