import React from "react";
import dayjs from "dayjs";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/calendar.scss";
import { Event } from "react-big-calendar";

const myEventsList: Event[] = [
  { start: new Date(), end: new Date(), title: "normal event" },
  { start: new Date(), end: new Date(), title: "clashing event" },
  { start: new Date(), end: new Date("30-09-2023"), title: "special event" },
];

const localizer = momentLocalizer(moment);

export const EventsPage = () => {
  return (
    <div>
      <h1 className="flex justify-center text-white text-2xl font-bold py-2">
        Events Booked
      </h1>
      <Calendar
        className="text-white text-xs bg-[#191a1f]"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
