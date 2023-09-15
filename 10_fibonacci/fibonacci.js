const fibonacci = function (member) {
    if (member < 0 || member != parseInt(member)) return "OOPS";
    let fibonacciArray = [];
    for (let i = 0; i < member; i++) {
        let index1 = i - 2;
        let index2 = i - 1;
        let member1 = index1 < 0 ? 0 : fibonacciArray[index1];
        let member2 = index2 < 0 ? 1 : fibonacciArray[index2];
        fibonacciArray[i] = member1 + member2;
    }
    return fibonacciArray[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
