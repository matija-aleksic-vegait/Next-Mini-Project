import Link from "next/link";
import TimesheetUtil from "../../utils/timesheet-util";

function TimesheetCalendarDay({
  day,
  currentDate,
  workEntries,
}: {
  day: Date;
  currentDate: Date;
  workEntries: Array<any>;
}) {
  return (
    <Link
      href={`/${day.getFullYear()}-${day.getMonth() + 1}-${day.getDay()}`}
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
      {TimesheetUtil.extractWorkEntryDataForCalendar(day, workEntries).map(
        (data, index) => (
          <div key={index} className="calendar__day__hours text-md">
            {data.hours} {data.description}
          </div>
        )
      )}
    </Link>
  );
}

export default TimesheetCalendarDay;
