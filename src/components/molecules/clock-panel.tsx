import React from "react";

import { Panel } from "@project/components";
import { GiTimeSynchronization } from "react-icons/gi";
import { ClockPanelProps } from "./types";

export const ClockPanel = ({ className, sync, time }: ClockPanelProps) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
    hours > 12 ? "PM" : "AM"
  }`;

  return (
    <Panel className={className}>
      <section className="clock-panel">
        <h1>Clock in time</h1>
        <p className="text-3xl py-3">{time || currentTime}</p>
        <section
          className={`${
            sync ? "text-green-400" : "text-red-400"
          }  sync-status flex gap-2 items-center`}
        >
          <GiTimeSynchronization />
          <p>{`Device ${!sync ? "not " : ""}in sync`}</p>
        </section>
      </section>
    </Panel>
  );
};
