const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (array) {
    let result = 0;
    for (const number of array) {
        result += number;
    }
    return result;
};

const multiply = function (array) {
    let result = array.length > 0 ? 1 : 0;
    for (const number of array) {
        result *= number;
    }
    return result;
};

const power = function (number, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= number;
    }
    return result;
    // Could also do simply:
    // return number**exponent;
};

const factorial = function (number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
