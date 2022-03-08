const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwo = drivers.slice (0, 2);
const lastTwo = drivers.slice (-2);

function returnFirstTwoDrivers() {
    return firstTwo;
}

function returnLastTwoDrivers() {
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num) {
    return function () {
        return num * num
    }
}  

let fareDoubler = fare => fare * 2
let fareTripler = fare => fare * 3

const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers (arrayofDrivers);
}