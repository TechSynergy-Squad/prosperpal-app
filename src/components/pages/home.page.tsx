import React from "react";
import { generativeText } from "../../services/bardai";
import { Panel } from "..";

export function Home() {
  const [text, setText] = React.useState("");
  const fetch = async () => {
    const { data } = await generativeText(
      "how much does a golf gti cost in South Africa?"
    );
    setText(data?.candidates[0]?.output);
  };
  React.useEffect(() => {
    fetch();
  }, []);
  return (
    <section>
      <p> {text}</p>

      <section className="flex gap-4">
        {/* <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel> */}
      </section>
    </section>
  );
}
