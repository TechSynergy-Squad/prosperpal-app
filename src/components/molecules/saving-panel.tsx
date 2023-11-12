import { Header, Panel } from "../atoms";
import { JobPanelProps } from "./types";

export const SavingPanel = ({ jobs }: JobPanelProps) => {
  const isIncreasing = (index: number) =>
    index == 0 ? true : jobs[index].amount > jobs[index - 1].amount;
  return (
    <Panel>
      <Header>My Savings</Header>
      <ul className="list-disc">
        {jobs.map((job, index) => (
          <li className="marker:text-[#5351d5] pb-5" key={index}>
            <section className="flex justify-between">
              <span>{job.name}</span>
              <span
                className={`text-xs ${
                  index >= 0 && isIncreasing(index)
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                R {job.amount}
              </span>
            </section>
          </li>
        ))}
      </ul>
    </Panel>
  );
};
