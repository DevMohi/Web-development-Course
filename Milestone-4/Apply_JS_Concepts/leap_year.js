function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0) {
    console.log("Is leap year", year);
  } else {
    console.log("Not leap year", year);
  }
}

isLeapYear(2000);
