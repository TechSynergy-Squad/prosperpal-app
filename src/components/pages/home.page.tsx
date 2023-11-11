import React from "react";
import { generativeText } from "../../services/bardai";


export function Home() {
  const [text, setText] = React.useState("");
  const fetch = async () => {
    const { data } = await generativeText("how much does a golf gti cost in South Africa?");
    setText(data?.candidates[0]?.output);
  };
  React.useEffect(() => {
    fetch();
  }, []);
  return <h2>{text}</h2>;
}
