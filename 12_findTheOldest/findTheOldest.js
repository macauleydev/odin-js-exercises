const findTheOldest = function(peopleArray) {
    let currentYear = new Date().getFullYear();
    let ages = peopleArray.map(person => (person.yearOfDeath ?? currentYear) - person.yearOfBirth);
    let indexOfMaxAge = ages.findIndex(age => age === Math.max(...ages));
    return peopleArray[indexOfMaxAge];
};

// Do not edit below this line
module.exports = findTheOldest;
