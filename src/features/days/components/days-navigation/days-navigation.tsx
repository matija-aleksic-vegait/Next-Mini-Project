import DaysUtil from "../../util/days-util";

function DaysNavigation({
  mondayDate,
  sundayDate,
  nextWeekFunction,
  previousWeekFunction,
}: {
  mondayDate: Date;
  sundayDate: Date;
  nextWeekFunction: Function;
  previousWeekFunction: Function;
}) {
  return (
    <section aria-label="Days Navigation">
      <div className="calendar-navigation">
        <div
          className="calendar-navigation__navigate"
          onClick={() => previousWeekFunction()}
        >
          <img src="/icons/chevron-left.svg" alt="navigate-previous" />
        </div>
        <div className="calendar-navigation__content">
          {DaysUtil.formatDateForDays(mondayDate, sundayDate)}
        </div>
        <div
          className="calendar-navigation__navigate"
          onClick={() => nextWeekFunction()}
        >
          <img src="/icons/chevron-right.svg" alt="navigate-next" />
        </div>
      </div>
    </section>
  );
}

export default DaysNavigation;
