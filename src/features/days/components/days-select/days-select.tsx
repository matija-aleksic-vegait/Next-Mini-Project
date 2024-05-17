import { isSameDay } from "date-fns";
import DaysUtil from "../../util/days-util";
import DaysCard from "../days-card/days-card";

function DaysSelect({
  workEntries,
  currentDate,
}: {
  workEntries: Array<any>;
  currentDate: Date;
}) {
  var workingDays = DaysUtil.formWorkingDaysInWeek(currentDate);
  return (
    <section aria-label="Days">
      <div className="calendar">
        <div className="calendar__header">Monday</div>
        <div className="calendar__header">Tuesday</div>
        <div className="calendar__header">Wednesday</div>
        <div className="calendar__header">Thursday</div>
        <div className="calendar__header">Friday</div>
        <div className="calendar__header">Saturday</div>
        <div className="calendar__header">Sunday</div>

        {workingDays &&
          workingDays.map((day, index) => (
            <DaysCard
              dayNumber={day.getDate()}
              workEntry={workEntries.find((entry) =>
                isSameDay(day, entry.date)
              )}
              key={index}
            />
          ))}

        <a
          href="days.html"
          className="calendar__day calendar__day--valid calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            09
            <div className="calendar__day__date__day-of-week">MON</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">
              4h Iqvia Holdings Inc.
            </div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--invalid calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            10
            <div className="calendar__day__date__day-of-week">TUE</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">
              4.6h Iqvia Holdings Inc.
            </div>
            <div className="calendar__day__hours text-md">4h IBM</div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--neutral calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            11
            <div className="calendar__day__date__day-of-week">WED</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">No hours yet</div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--neutral calendar__day--current-week calendar__day--current"
        >
          <div className="calendar__day__date heading-xl">
            12
            <div className="calendar__day__date__day-of-week">THU</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">No hours yet</div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--neutral calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            13
            <div className="calendar__day__date__day-of-week">FRI</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">No hours yet</div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--neutral calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            14
            <div className="calendar__day__date__day-of-week">SAT</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">No hours yet</div>
          </div>
        </a>
        <a
          href="days.html"
          className="calendar__day calendar__day--neutral calendar__day--current-week"
        >
          <div className="calendar__day__date heading-xl">
            15
            <div className="calendar__day__date__day-of-week">SUN</div>
          </div>
          <div>
            <div className="calendar__day__hours text-md">No hours yet</div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default DaysSelect;
