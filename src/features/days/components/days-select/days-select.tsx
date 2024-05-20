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
              currentDate={currentDate}
              date={day}
              workEntries={workEntries.filter((entry) => {
                return isSameDay(day, entry.date);
              })}
              key={index}
            />
          ))}
      </div>
    </section>
  );
}

export default DaysSelect;
