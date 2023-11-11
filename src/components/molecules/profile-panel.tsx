import React, { useState } from "react";

import { Avatar, Button, Panel, Modal } from "../../components";
import { ProfileProps } from "./types";
import { ProfileService } from "../../services/sub-services/profile-service";

export const ProfilePanel = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const userProfile: ProfileProps = {
    ID: id,
    Status: "Active",
    Address: "1234 Main St, New York, NY 10001",
    Phone: "012-345-6789",
    Email: email,
  };

  const userData = async () => {
    const { data } = await ProfileService.profile();
    return data;
  };

  userData().then(({ email, id }) => {
    setEmail(email);
    setId(id);
  });

  const getValues = (obj: ProfileProps) => {
    return Object.values(obj);
  };

  const getKeys = (obj: ProfileProps) => {
    return Object.keys(obj);
  };

  return (
    <Panel>
      <section className="profile-panel flex">
        <section className="profile-panel-avatar flex gap-4 w-[50%]">
          <Avatar className="" imgSrc="https://picsum.photos/100" />
          <section className="profile-panel__avatar ">
            <section className="profile-panel__info mb-3">
              <h3>John Doe</h3>
              <p>Technician</p>
            </section>
            <section className="profile-options">
              <section className="profile-options__edit flex gap-2">
                <Button
                  onClick={() => null}
                  className="px-5 py-1 w-16 text-xs"
                  shape="rounded"
                >
                  Edit
                </Button>
                <Modal />
              </section>
            </section>
          </section>
        </section>

        <section className="w-[50%] flex justify-between text-sm">
          <section className="profile-panel__details flex flex-col gap-1">
            {getKeys(userProfile).map((title) => {
              return <h1 key={title}>{title}</h1>;
            })}
          </section>
          <section className="profile-panel__details flex flex-col gap-1">
            {getValues(userProfile).map((value, key) => {
              return (
                <h1
                  className={
                    ((key == 0 || key == 4) && "text-yellow-500") || ""
                  }
                  key={key}
                >
                  {value}
                </h1>
              );
            })}
          </section>
        </section>
      </section>
    </Panel>
  );
};
