const convertToCelsius = function (tempF) {
    let exactTempC = ((tempF - 32) * 5) / 9;
    let approxTempC = Math.round(exactTempC * 10) / 10;
    return approxTempC;
};

const convertToFahrenheit = function (tempC) {
    let exactTempF = (tempC * 9) / 5 + 32;
    let approxTempF = Math.round(exactTempF * 10) / 10;
    return approxTempF;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
