import { Panel } from "../";
import { FormPanelProps } from "./types";

export const FormPanel = ({ name, description }: FormPanelProps) => {
  return (
    <Panel>
      <section className="form-panel">
        <form action="" className="flex flex-col gap-2">
          <section className="title flex items-center mr-4">
            <input
              className="pr-3 mr-2 bg-dark-panel-sub-bg border-white-1"
              type="checkbox"
            />
            <label className="text-white ml-2">{name || "Title"}</label>
          </section>
          <input
            className="border-none text-xs bg-transparent ml-8 text-white"
            placeholder="Description"
            name="description"
            id="description"
            value={description || "Description"}
          />
        </form>
      </section>
    </Panel>
  );
};
