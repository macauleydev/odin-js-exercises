const sumAll = function (num1, num2) {
    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)) {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let smallerNum, largerNum;
    if (num1 <= num2) {
        smallerNum = num1;
        largerNum = num2;
    } else {
        largerNum = num1;
        smallerNum = num2;
    }
    let sum = 0;
    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
