import Link from "next/link";
import TimesheetUtil from "../../utils/timesheet-util";
import DaysUtil from "@/features/days/util/days-util";
import { isSameDay } from "date-fns";

function TimesheetCalendarDay({
  day,
  workEntries,
  currentDate,
}: {
  day: Date;
  workEntries: Array<any>;
  currentDate: Date;
}) {
  return (
    <Link
      href={DaysUtil.formHrefForDaysNavigation(day)}
      className={`calendar__day  
      ${isSameDay(day, new Date()) ? "calendar__day--current" : ""}
      ${
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
