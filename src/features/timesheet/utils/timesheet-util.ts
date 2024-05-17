import {
  addDays,
  endOfMonth,
  getDaysInMonth,
  isAfter,
  isBefore,
  isMonday,
  isSameDay,
  isSunday,
  nextSunday,
  previousMonday,
  startOfMonth,
  subDays,
} from "date-fns";

export default class TimesheetUtil {
  public static getDayName(dateStr: any) {
    var date = new Date(dateStr);
    return date
      .toLocaleDateString("en-EN", { weekday: "long" })
      .toUpperCase()
      .slice(0, 3);
  }

  public static formCalendarDaysArray(currentDate: Date) {
    var workingDaysArray = formCurrentMonthWorkingDaysArray(currentDate);
    workingDaysArray = addMissingDaysForWorkingWeekBeginning(
      workingDaysArray,
      currentDate
    );
    workingDaysArray = addMissingDaysForWorkingWeekEnd(
      workingDaysArray,
      currentDate
    );

    return workingDaysArray;
  }

  public static findFirstWorkingDayOfMonth(currentDate: Date) {
    const startDayOfMonth = startOfMonth(currentDate);
    return isMonday(startDayOfMonth)
      ? startDayOfMonth
      : previousMonday(startDayOfMonth);
  }

  public static findLastWorkingDayOfMonth(currentDate: Date) {
    const endDayOfMonth = endOfMonth(currentDate);
    return isSunday(endDayOfMonth) ? endDayOfMonth : nextSunday(endDayOfMonth);
  }

  public static checkIfWorkEntryIsValid(
    givenDay: Date,
    workEntries: Array<any>
  ) {
    var totalTime = 0;

    workEntries.forEach((entry: any) => {
      if (isSameDay(entry.date, givenDay)) {
        totalTime += entry.time + entry.overtime;
      }
    });

    return totalTime >= 7.5 ? true : false;
  }

  public static checkIfDayIsInThisMonth(givenDate: Date, currentDate: Date) {
    return isBefore(givenDate, startOfMonth(currentDate)) ||
      isAfter(givenDate, endOfMonth(currentDate))
      ? true
      : false;
  }

  public static checkIfWorkDayHasEntry(
    givenDate: Date,
    workEntries: Array<any>
  ) {
    return workEntries.some((entry: any) => {
      return isSameDay(entry.date, givenDate);
    });
  }

  public static extractWorkEntryDataForCalendar(
    givenDate: Date,
    workEntries: Array<any>
  ) {
    var data: Array<any> = [];

    workEntries.forEach((entry) => {
      if (isSameDay(entry.date, givenDate)) {
        data.push({
          description: entry.description,
          hours: entry.time + entry.overtime,
        });
      }
    });

    if (data.length != 0) return data;
    return [{ description: "No hours yet" }];
  }
}

function formCurrentMonthWorkingDaysArray(currentDate: Date) {
  const totalDaysInThisMonth = getDaysInMonth(currentDate);
  var dayTemp = startOfMonth(currentDate);
  return new Array(totalDaysInThisMonth)
    .fill(null)
    .map((_, i) => addDays(dayTemp, i));
}

function addMissingDaysForWorkingWeekBeginning(
  currentMonthDaysArray: Array<Date>,
  currentDate: Date
) {
  var dayTemp = startOfMonth(currentDate);
  while (!isMonday(dayTemp)) {
    dayTemp = subDays(dayTemp, 1);
    currentMonthDaysArray.unshift(dayTemp);
  }
  return currentMonthDaysArray;
}

function addMissingDaysForWorkingWeekEnd(
  currentMonthDaysArray: Array<Date>,
  currentDate: Date
) {
  var dayTemp = endOfMonth(currentDate);
  while (!isSunday(dayTemp)) {
    dayTemp = addDays(dayTemp, 1);
    currentMonthDaysArray.push(dayTemp);
  }
  return currentMonthDaysArray;
}
