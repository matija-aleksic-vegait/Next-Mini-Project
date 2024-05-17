import { addDays, isMonday, previousMonday } from "date-fns";

export default class DaysUtil {
  public static formatDateForDays(monday: Date, sunday: Date) {
    return `${monday.getDate()}${getDayNumberExtension(
      monday
    )} ${monday.toLocaleString("default", {
      month: "long",
    })} ${monday.getFullYear()} - ${sunday.getDate()}${getDayNumberExtension(
      sunday
    )} ${sunday.toLocaleString("default", {
      month: "long",
    })} ${sunday.getFullYear()}`;
  }

  public static formWorkingDaysInWeek(currentDay: Date) {
    var workingDays = [];

    var dayTemp = isMonday(currentDay)
      ? currentDay
      : previousMonday(currentDay);

    workingDays.push(dayTemp);

    for (var i = 0; i < 6; i++) {
      dayTemp = addDays(dayTemp, 1);
      workingDays.push(dayTemp);
    }

    return workingDays;
  }
}

function getDayNumberExtension(date: Date) {
  var dayNumber = date.getDate();
  switch (dayNumber) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
