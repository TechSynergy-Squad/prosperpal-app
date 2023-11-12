import { useState } from "react";
import { GoalPanel } from "../molecules";
import { Panel } from "..";
import { BanksDropDown, Graph, Header, PieChartGraph } from "../atoms";
import { Switch } from "@headlessui/react";
import { useGetTransactionsQuery } from "../../queries";

export const ReportPage = () => {
  const { data } = useGetTransactionsQuery();
  console.log("Get Transactions", data);

  const [selectedBank, setSelectedBank] = useState("Select Bank");
  const [isConnected, setIsConnected] = useState(false);

  return (
    <>
      <div className="relative z-50">
        <div className="inset-0 absolute">
          <BanksDropDown setBank={setSelectedBank} />
        </div>
      </div>
      <section className="view-type flex justify-end gap-6 py-4">
        <section className="flex gap-2">
          <p className="text-primary">Connect Bank</p>
          <Switch
            checked={isConnected}
            onChange={() => setIsConnected(!isConnected)}
            className={`${
              isConnected ? "bg-green-600" : "bg-gray-500"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                isConnected ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </section>
      </section>
      <section className="report-page grid grid-cols-5 gap-6  ">
        <section className="col-span-2">
          <GoalPanel
            connected={false}
            percentage={50}
            bank={selectedBank}
            className="pl-7"
          />
        </section>
        <section className="">
          <GoalPanel
            connected={isConnected}
            percentage={100}
            bank={selectedBank}
            className="pl-7"
          />
        </section>
        <section className="col-span-2">
          <Panel>
            <Header>Transaction Categories</Header>
            <PieChartGraph
              transactions={[
                {
                  category: "Food",
                  percentage: 30,
                },
                {
                  category: "Transport",
                  percentage: 20,
                },
                {
                  category: "Entertainment",
                  percentage: 30,
                },
                {
                  category: "Shopping",
                  percentage: 20,
                },
                {
                  category: "Others",
                  percentage: 20,
                },
              ]}
              colors={["#FFB800", "#FF4D00", "#00B4FF", "#00FF6F", "#FF00E5"]}
            />
          </Panel>
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
