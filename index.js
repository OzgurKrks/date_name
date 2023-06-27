class GetDate {
  constructor(date) {
    let _date = date;
    let _today = new Date();
    let _ADay = new Date(_date);

    // get day name
    this.getDayName = function () {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      if (_date !== undefined) {
        return days[_ADay.getDay()];
      } else {
        return days[_today.getDay()];
      }
    };

    // get day month
    this.getMonth = function () {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      if (_date !== undefined) {
        return months[_ADay.getMonth()];
      } else {
        return months[_today.getMonth()];
      }
    };

    // get day month
    this.getYear = function () {
      if (_date !== undefined) {
        return _ADay.getFullYear();
      } else {
        return _today.getFullYear();
      }
    };
  }
}

export function getDate(input) {
  // check input
  if (input === undefined) {
    return new GetDate();
  } else if (input !== "" && typeof input === "string") {
    return new GetDate(input);
  }
}
