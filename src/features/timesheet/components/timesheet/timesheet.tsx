import TimesheetNavigation from "../navigation/timesheet-navigation";
import TimesheetCalendar from "../calendar/timesheet-calendar";

function Timesheet() {
  return (
    <>
      <TimesheetHeader />
      <TimesheetNavigation />
      <TimesheetCalendar />
    </>
  );
}

export default Timesheet;

function TimesheetHeader() {
  return (
    <section aria-label="Timesheet Card" className="application-content__card">
      <div className="application-content__card__action-container">
        <div className="heading-lg">Timesheet</div>
        <p className="text-lg">
          Log your daily work hours, and overtime with seamless time tracking
          and work hour management tool.
        </p>
      </div>
    </section>
  );
}
