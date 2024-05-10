import TimesheetUtil from "../../utils/timesheet-util";

function TimesheetCalendar() {
  const currentDate = new Date();
  const daysInCurrentMonth = TimesheetUtil.formCalendarDaysArray(currentDate);

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
              href="#"
              //   className="calendar__day calendar__day--neutral calendar__day--neutral--transparent"
              className="calendar__day calendar__day--neutral"
              // className="calendar__day calendar__day--valid calendar__day--valid--transparent"
              // className="calendar__day calendar__day--invalid calendar__day--current-week"
              key={index}
            >
              <div className="calendar__day__date heading-xl">
                {day}
                <div className="calendar__day__date__day-of-week">MON</div>
              </div>
              <div className="calendar__day__hours text-md">
                4h Iqvia Holdings Inc.
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}

export default TimesheetCalendar;
