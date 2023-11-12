import { Header, Panel } from "../atoms";
import { BsBank } from "react-icons/bs";
import { TbCloudQuestion } from "react-icons/tb";
import { GoalPanelProps } from "./types";
import { BsEmojiLaughing, BsEmojiSmile } from "react-icons/bs";
import { PiSmileySadThin } from "react-icons/pi";

export const GoalPanel = ({
  percentage,
  connected,
  bank = "",
}: GoalPanelProps) => {
  return (
    <Panel>
      <section className="clock-panel">
        <Header>Goal Meter</Header>

        <p className="text-3xl text-center flex justify-center py-3">
          {percentage === 0 || !connected ? (
            <TbCloudQuestion className="text-red-500 w-12" />
          ) : percentage < 50 ? (
            <PiSmileySadThin className="text-yellow-300" />
          ) : percentage < 100 ? (
            <BsEmojiSmile className="text-orange-400" />
          ) : (
            <BsEmojiLaughing className={"text-green-400"} />
          )}
        </p>
        <section
          className={`${
            connected ? "text-green-400" : "text-red-400"
          }  sync-status flex gap-2 justify-center items-center`}
        >
          <BsBank />
          <p className="text-xs">{`${
            connected ? "Connected to " + bank : "No Bank is connected"
          }`}</p>
        </section>
      </section>
    </Panel>
  );
};
