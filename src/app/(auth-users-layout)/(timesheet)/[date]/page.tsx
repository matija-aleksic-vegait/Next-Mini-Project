"use client";

import MockQueryConstants from "@/constants/mock-queries-constants";
import DaysEntryTable from "@/features/days/components/days-entry-table/days-entry-table";
import DaysHeader from "@/features/days/components/days-header/days-header";
import DaysNavigation from "@/features/days/components/days-navigation/days-navigation";
import DaysSelect from "@/features/days/components/days-select/days-select";
import { isMonday, isSunday, nextSunday, previousMonday } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
  params: {
    date: string;
  };
};

function Day({ params }: Props) {
  const [currentDate, setCurrentDay] = useState(new Date(params.date));
  const [workEntries, setWorkEntries] = useState([]);

  var firstMonday = isMonday(currentDate)
    ? currentDate
    : previousMonday(currentDate);
  var lastSunday = isSunday(currentDate)
    ? currentDate
    : nextSunday(currentDate);

  useEffect(() => {
    fetch(
      MockQueryConstants.getAllWorkEntriesForUser("1", firstMonday, lastSunday)
    )
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setWorkEntries(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, [currentDate]);

  return (
    <>
      {/* <div className="low-resolution-warning body-md">
        Resolution under 420px is not supported.
      </div> */}
      <div className="application">
        <main aria-label="Days Card" className="application-content">
          <DaysHeader />
          <DaysNavigation
            mondayDate={firstMonday}
            sundayDate={lastSunday}
            currentDate={currentDate}
          />
          <DaysSelect currentDate={currentDate} workEntries={workEntries} />
          <DaysEntryTable />
        </main>
      </div>
    </>
  );
}

export default Day;
