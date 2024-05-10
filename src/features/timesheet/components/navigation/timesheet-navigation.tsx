function TimesheetNavigation() {
  return (
    <section aria-label="Calendar Navigation">
      <div className="calendar-navigation">
        <div className="calendar-navigation__navigate">
          <img src="/icons/chevron-left.svg" alt="navigate-previous" />
        </div>
        <div className="calendar-navigation__content">March 2026.</div>
        <div className="calendar-navigation__navigate">
          <img src="/icons/chevron-right.svg" alt="navigate-next" />
        </div>
      </div>
    </section>
  );
}

export default TimesheetNavigation;
