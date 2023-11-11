import React, { FC } from "react";

export type Attendee = {
  name: string;
  surname: string;
  location: "online" | "physical";
  city: string;
  github: string;
};

export type Attendees = {
  attendees: Attendee[];
};

export const ListItems: FC<Attendees> = ({ attendees }) => {
  return (
    <ul>
      {attendees.map(({ city, location, github, surname, name }, index) => (
        <li key={index}>
          {name} - {surname} - {location} - {city} - {github}
        </li>
      ))}
    </ul>
  );
};
