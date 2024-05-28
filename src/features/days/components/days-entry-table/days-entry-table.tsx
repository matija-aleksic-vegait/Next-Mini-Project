import { useEffect, useState } from "react";
import DaysEntryForm from "../form/days-entry-form";

function DaysEntryTable({
  workEntries,
  clients,
  categories,
}: {
  workEntries: Array<any>;
  clients: Array<any>;
  categories: Array<string>;
}) {
  const [currentDayWorkEntries, setCurrentDayWorkEntries] =
    useState<Array<any>>(workEntries);

  const addNewWorkEntry = () => {
    const newElement = {
      client: "",
      project: "",
      category: "",
      description: "",
      hours: undefined,
    };
    setCurrentDayWorkEntries((currentDayWorkEntries: any) => [
      ...currentDayWorkEntries,
      newElement,
    ]);
  };

  useEffect(() => {
    setCurrentDayWorkEntries(workEntries);
  }, [workEntries]);

  return (
    <section aria-label="Day Entry">
      <div className="timesheet-entry">
        <DaysEntryTableHeader />

        {currentDayWorkEntries &&
          currentDayWorkEntries.map((entry, index) => (
            <DaysEntryForm
              key={index}
              workEntry={entry}
              clients={clients}
              categories={categories}
            />
          ))}

        <button
          className="btn btn--secondary btn--secondary--icon-left pointer-default gray-hover"
          type="button"
          onClick={() => {
            addNewWorkEntry();
          }}
        >
          <img src="/icons/plus.svg" alt="add" />
          <span>New entry</span>
        </button>
      </div>
    </section>
  );
}

export default DaysEntryTable;

function DaysEntryTableHeader() {
  return (
    <div className="timesheet-entry__header">
      <div className="timesheet-entry__header__item">
        <span>Client</span>
        <span className="mandatory">*</span>
      </div>
      <div className="timesheet-entry__header__item">
        <span>Project</span>
        <span className="mandatory">*</span>
      </div>
      <div className="timesheet-entry__header__item">
        <span>Category</span>
        <span className="mandatory">*</span>
      </div>
      <div className="timesheet-entry__header__item">
        <span>Description</span>
      </div>
      <div className="timesheet-entry__header__item timesheet-entry__header__item--small">
        <span>Hours</span>
        <span className="mandatory">*</span>
      </div>
    </div>
  );
}
