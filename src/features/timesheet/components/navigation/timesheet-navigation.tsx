import { addMonths, subMonths } from "date-fns";

function TimesheetNavigation({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Date;
  setCurrentDate: Function;
}) {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <section aria-label="Calendar Navigation">
      <div className="calendar-navigation">
        <div
          className="calendar-navigation__navigate"
          onClick={() => previousMonth()}
        >
          <img src="/icons/chevron-left.svg" alt="navigate-previous" />
        </div>
        <div className="calendar-navigation__content">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}.
        </div>
        <div
          className="calendar-navigation__navigate"
          onClick={() => nextMonth()}
        >
          <img src="/icons/chevron-right.svg" alt="navigate-next" />
        </div>
      </div>
    </section>
  );
}

export default TimesheetNavigation;
