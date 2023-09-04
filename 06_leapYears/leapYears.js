const leapYears = function (year) {
    // Divisble by 400? Leap year. Else...
    // Divisble by 100? Not a leap year. Else...
    // Divisible by 4? Leap year. Else...
    // Not a leap year.
    let isLeapYear;

    isLeapYear =
        year % 400 == 0
            ? true
            : year % 100 == 0
            ? false
            : year % 4 == 0
            ? true
            : false;
    return isLeapYear;
};

// Alternatively:
// Not a leap year if:
// - Divisble by 100 but not by 400
// - Not divisible by 4
// Otherwise a leap year

// Do not edit below this line
module.exports = leapYears;
