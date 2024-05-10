import {
  addDays,
  endOfMonth,
  getDay,
  getDaysInMonth,
  isMonday,
  isSunday,
  previousDay,
  startOfMonth,
  subDays,
} from "date-fns";

export default class TimesheetUtil {
  public static getDayName(dateStr: any, locale: string) {
    var date = new Date(dateStr);
    return date
      .toLocaleDateString(locale, { weekday: "long" })
      .toUpperCase()
      .slice(0, 3);
  }

  public static formCalendarDaysArray(currentDate: Date) {
    var workingDaysArray = formCurrentMonthWorkingDaysArray(currentDate);
    workingDaysArray = addMissingDaysForWorkingWeekBeggining(
      workingDaysArray,
      currentDate
    );
    workingDaysArray = addMissingDaysForWorkingWeekEnd(
      workingDaysArray,
      currentDate
    );

    return workingDaysArray;
  }
}

function formCurrentMonthWorkingDaysArray(currentDate: Date) {
  const totalDaysInThisMonth = getDaysInMonth(currentDate);
  return new Array(totalDaysInThisMonth).fill(null).map((_, i) => i + 1);
}

function addMissingDaysForWorkingWeekBeggining(
  currentMonthDaysArray: Array<number>,
  currentDate: Date
) {
  var dayTemp = startOfMonth(currentDate);
  while (!isMonday(dayTemp)) {
    dayTemp = subDays(dayTemp, 1);
    currentMonthDaysArray.unshift(dayTemp.getDate());
  }
  return currentMonthDaysArray;
}

function addMissingDaysForWorkingWeekEnd(
  currentMonthDaysArray: Array<number>,
  currentDate: Date
) {
  var dayTemp = endOfMonth(currentDate);
  while (!isSunday(dayTemp)) {
    dayTemp = addDays(dayTemp, 1);
    currentMonthDaysArray.push(dayTemp.getDate());
  }
  return currentMonthDaysArray;
}
