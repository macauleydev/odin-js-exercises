const palindromes = function (string) {
    string = alphaNumeric(string).toLowerCase();
    let right = string.length - 1;
    console.log(string);
    for (let left = 0; left < right; left++) {
        if (string[left] !== string[right]) {
            return false;
        }
        right--;
    }
    return true;
};

const isLetter = (string) => string.toLowerCase() !== string.toUpperCase();
const isNumber = (string) => string == +string;

function alphaNumeric(string) {
    let result = "";
    for (let char of string) {
        
        if (char !== " " && (isLetter(char) || isNumber(char))) result += char;
    }
    return result;
}

// Do not edit below this line
module.exports = palindromes;
