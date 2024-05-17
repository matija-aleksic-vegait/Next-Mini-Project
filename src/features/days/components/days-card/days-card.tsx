function DaysCard({
  dayNumber,
  workEntry,
}: {
  dayNumber: number;
  workEntry: any;
}) {
  console.log(workEntry);
  return (
    <a
      href="days.html"
      className="calendar__day calendar__day--valid calendar__day--current-week"
    >
      <div className="calendar__day__date heading-xl">
        {dayNumber}
        <div className="calendar__day__date__day-of-week">MON</div>
      </div>
      <div>
        <div className="calendar__day__hours text-md">
          4h Iqvia Holdings Inc.
        </div>
      </div>
    </a>
  );
}

export default DaysCard;
