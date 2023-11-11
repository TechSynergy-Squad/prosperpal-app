import React from "react";

import { Panel } from "../atoms";
import { JobPanelProps } from "./types";

export const JobPanel = ({ jobs }: JobPanelProps) => {
  return (
    <Panel>
      <h1 className="mb-4">Jobs</h1>
      <ul className="list-disc">
        {jobs.map((job, index) => (
          <li className="marker:text-[#5351d5] pb-5" key={index}>
            {job.clock}
          </li>
        ))}
      </ul>
    </Panel>
  );
};
