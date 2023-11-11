import { Attendees } from "../../components";

export const AttendeesPage = () => {
  const attendees: Attendees = {
    attendees: [
      {
        name: "Annalise",
        surname: "Keating",
        location: "physical",
        city: "Cape Town",
        github: "",
      },
      {
        name: "Mary",
        surname: "Jacobs",
        location: "online",
        city: "Bloemfontein",
        github: "@maryjacobs",
      },
      {
        name: "Andile",
        surname: "Nkosi",
        location: "physical",
        city: "Johannesburg",
        github: "",
      },
      {
        name: "Joosh",
        surname: "Blank",
        location: "online",
        city: "Cape Town",
        github: "",
      },
      {
        name: "Douwe",
        surname: "Erberts",
        location: "physical",
        city: "",
        github: "",
      },
    ],
  };
  console.log(attendees);

  return (
    <section className="text-white">
      <h1 className="text-3xl font-bold">Attendees</h1>
      {/*  <ListItems attendees={attendees} /> */}
    </section>
  );
};
