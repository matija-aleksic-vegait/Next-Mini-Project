"use client";

import { useEffect, useState } from "react";
import TimesheetUtil from "../../utils/timesheet-util";
import MockQueryConstants from "@/constants/mock-queries-constants";

function TimesheetCalendar({ currentDate }: { currentDate: Date }) {
  const [workEntries, setWorkEntries] = useState([]);

  const daysInCurrentMonth = TimesheetUtil.formCalendarDaysArray(currentDate);
  const firstMondayOfMonth =
    TimesheetUtil.findFirstWorkingDayOfMonth(currentDate);
  const lastFridayOfMonth =
    TimesheetUtil.findLastWorkingDayOfMonth(currentDate);

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
        console.log(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);

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
            <a
              key={index}
              href="#"
              className={`calendar__day  ${
                TimesheetUtil.checkIfDayIsInThisMonth(day, currentDate)
                  ? "calendar-day--transparent"
                  : ""
              } 
              ${
                TimesheetUtil.checkIfWorkDayHasEntry(day, workEntries)
                  ? TimesheetUtil.checkIfWorkEntryIsValid(day, workEntries)
                    ? "calendar__day--valid"
                    : "calendar__day--invalid"
                  : "calendar__day--neutral"
              }`}
            >
              <div className="calendar__day__date heading-xl">
                {day.getDate()}
                <div className="calendar__day__date__day-of-week">
                  {TimesheetUtil.getDayName(day)}
                </div>
              </div>
              {TimesheetUtil.extractWorkEntryDataForCalendar(
                day,
                workEntries
              ).map((data, index) => (
                <div key={index} className="calendar__day__hours text-md">
                  {data.hours} {data.description}
                </div>
              ))}
            </a>
          ))}
      </div>
    </section>
  );
}

export default TimesheetCalendar;
