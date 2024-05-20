import Link from "next/link";
import DaysUtil from "../../util/days-util";
import { isSameDay } from "date-fns";
import TimesheetUtil from "@/features/timesheet/utils/timesheet-util";

function DaysCard({
  date,
  workEntries,
  currentDate,
}: {
  date: Date;
  workEntries: Array<any>;
  currentDate: Date;
}) {
  return (
    <Link
      href={DaysUtil.formHrefForDaysNavigation(date)}
      className={`calendar__day calendar__day--current-week ${
        isSameDay(date, currentDate) ? "calendar__day--current" : ""
      } ${
        workEntries && workEntries.length != 0
          ? TimesheetUtil.checkIfWorkEntryIsValid(date, workEntries)
            ? "calendar__day--valid"
            : "calendar__day--invalid"
          : "calendar__day--neutral"
      }`}
    >
      <div className="calendar__day__date heading-xl">
        {date.getDate()}
        <div className="calendar__day__date__day-of-week">
          {TimesheetUtil.getDayName(date)}
        </div>
      </div>
      <div>
        {workEntries &&
          workEntries.map((data, index) => (
            <div key={index} className="calendar__day__hours text-md">
              {data.hours} {data.description}
            </div>
          ))}
      </div>
    </Link>
  );
}

export default DaysCard;
