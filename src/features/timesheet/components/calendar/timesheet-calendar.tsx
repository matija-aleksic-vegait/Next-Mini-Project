"use client";

import { useEffect, useState } from "react";
import TimesheetUtil from "../../utils/timesheet-util";
import MockQueryConstants from "@/constants/mock-queries-constants";
import TimesheetCalendarDay from "./timesheet-calendar-day";

function TimesheetCalendar({ currentDate }: { currentDate: Date }) {
  const [workEntries, setWorkEntries] = useState([]);

  const daysInCurrentMonth = TimesheetUtil.formCalendarDaysArray(currentDate);
  const firstMondayOfMonth = daysInCurrentMonth[0];
  const lastFridayOfMonth = daysInCurrentMonth[daysInCurrentMonth.length - 1];

  useEffect(() => {
    fetch(
      MockQueryConstants.getAllWorkEntriesForUser(
        "1",
        firstMondayOfMonth,
        lastFridayOfMonth
      )
    )
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setWorkEntries(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [currentDate]);

  return (
    <section aria-label="Calendar">
      <div className="calendar">
        <div className="calendar__header">Monday</div>
        <div className="calendar__header">Tuesday</div>
        <div className="calendar__header">Wednesday</div>
        <div className="calendar__header">Thursday</div>
        <div className="calendar__header">Friday</div>
        <div className="calendar__header">Saturday</div>
        <div className="calendar__header">Sunday</div>

        {daysInCurrentMonth &&
          daysInCurrentMonth.map((day, index) => (
            <TimesheetCalendarDay
              day={day}
              workEntries={workEntries}
              key={index}
              currentDate={currentDate}
            />
          ))}
      </div>
    </section>
  );
}

export default TimesheetCalendar;
