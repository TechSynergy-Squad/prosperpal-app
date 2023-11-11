import { ListGraph } from "../atoms/index";
import { ListGraphInputProps } from "../atoms/types";

export function GoalsListGraph(): JSX.Element {
  const listGraphInput: ListGraphInputProps[] = [
    { date: "2021-01-01", title: "title", description: "description" },
    { date: "2021-01-01", title: "title1", description: "description1" },
    { date: "2021-01-01", title: "title2", description: "description2" },
    { date: "2021-01-01", title: "title3", description: "description3" },
    { date: "2021-01-01", title: "title4", description: "description4" },
  ];
  return <ListGraph inputs={listGraphInput} />;
}
