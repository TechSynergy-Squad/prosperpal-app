import { useEffect, useState } from "react";

import { ProfileService } from "../../services/sub-services/profile-service";
import { UserProps } from "../molecules/types";
import { ClockPanel, JobPanel, TableJobPanel, UserPanel } from "../molecules";
import { Panel } from "..";
import { Graph } from "../atoms";
import { Switch } from "@headlessui/react";

export const ReportPage = () => {
  const [userDetails, setUserDetails] = useState<UserProps>({
    name: "",
    job: "",
    email: "",
    profile: "",
  });

  //const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  const [isHidden] = useState(true);

  const [clockDetails, setClockDetails] = useState({
    time: "",
    sync: false,
  });
  const [jobs, setJobs] = useState([]);

  const [isList, setIsList] = useState(true);

  const getReports = async () => {
    return await ProfileService.report();
  };

  useEffect(() => {
    getReports().then((report) => {
      const { userDetails, clockDetails, jobs } = report;
      setUserDetails(userDetails);
      setClockDetails(clockDetails);
      setJobs(jobs);
    });
  }, []);
  /* type Props = {
    x: number;
    y: number;
    payload: {
      value: string;
    };
  }; */

  return (
    <>
      <section className="report-page grid grid-cols-2 gap-6  ">
        <UserPanel className="flex justify-center" userDetails={userDetails} />
        <section className="grid-rows">
          <ClockPanel
            time={clockDetails.time}
            sync={clockDetails.sync}
            className="pl-7"
          />
          {isHidden && (
            <section className="table-view">
              <section className="view-type flex gap-6">
                <p className="text-white">List View</p>
                <Switch
                  checked={isList}
                  onChange={() => setIsList(!isList)}
                  className={`${
                    isList ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      isList ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </section>

              {isList ? (
                <JobPanel jobs={jobs} className="pl-9" />
              ) : (
                <TableJobPanel jobs={jobs} />
              )}
            </section>
          )}
        </section>
      </section>
      <div className="pt-6">
        <Panel>
          <Graph />
        </Panel>
      </div>
    </>
  );
};
