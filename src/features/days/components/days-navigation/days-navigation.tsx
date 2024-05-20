import TimesheetUtil from "@/features/timesheet/utils/timesheet-util";
import DaysUtil from "../../util/days-util";
import { addDays, subDays } from "date-fns";
import Link from "next/link";

function DaysNavigation({
  mondayDate,
  sundayDate,
  currentDate,
}: {
  mondayDate: Date;
  sundayDate: Date;
  currentDate: Date;
}) {
  return (
    <section aria-label="Days Navigation">
      <div className="calendar-navigation">
        <Link
          href={`${DaysUtil.formHrefForDaysNavigation(
            subDays(currentDate, 7)
          )}`}
          className="calendar-navigation__navigate"
        >
          <img src="/icons/chevron-left.svg" alt="navigate-previous" />
        </Link>
        <div className="calendar-navigation__content">
          {DaysUtil.formatDateForDays(mondayDate, sundayDate)}
        </div>
        <Link
          href={`${DaysUtil.formHrefForDaysNavigation(
            addDays(currentDate, 7)
          )}`}
          className="calendar-navigation__navigate"
        >
          <img src="/icons/chevron-right.svg" alt="navigate-next" />
        </Link>
      </div>
    </section>
  );
}

export default DaysNavigation;
