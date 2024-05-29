"use client";

import MockQueryConstants from "@/constants/mock-queries-constants";
import DaysEntryTable from "@/features/days/components/days-entry-table/days-entry-table";
import DaysHeader from "@/features/days/components/days-header/days-header";
import DaysNavigation from "@/features/days/components/days-navigation/days-navigation";
import DaysSelect from "@/features/days/components/days-select/days-select";
import TimesheetUtil from "@/features/timesheet/utils/timesheet-util";
import { isMonday, isSunday, nextSunday, previousMonday } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
  params: {
    day: string;
  };
};

function Day({ params }: Props) {
  const [currentDate] = useState(new Date(params.day));
  const [workEntries, setWorkEntries] = useState<Array<any>>([]);
  const [clients, setClients] = useState<Array<any>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);

  var firstMonday = isMonday(currentDate)
    ? currentDate
    : previousMonday(currentDate);
  var lastSunday = isSunday(currentDate)
    ? currentDate
    : nextSunday(currentDate);

  useEffect(() => {
    fetchWorkEntities();
    fetchClients();
    fetchCategories();
  }, [currentDate]);

  const fetchWorkEntities = () => {
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
  };

  const fetchClients = () => {
    return fetch(MockQueryConstants.getAllClientsFetchProjects())
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setClients(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const fetchCategories = () => {
    fetch(MockQueryConstants.categories)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setCategories(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

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
          <DaysEntryTable
            clients={clients}
            categories={categories}
            workEntries={TimesheetUtil.extractWorkEntriesForDate(
              currentDate,
              workEntries
            )}
          />
        </main>
      </div>
    </>
  );
}

export default Day;
