const leapYears = function (year) {
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

// Do not edit below this line
module.exports = leapYears;
