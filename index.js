// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    let newArr = drivers.slice(0,2);
    return newArr;
}

function returnLastTwoDrivers(drivers){
    let newArr = drivers.slice(-2);
    return newArr;
}

const selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier){
    return function(num){
        return num * multiplier;
    }
}

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, funcArg){
    let result;
    if (funcArg === returnFirstTwoDrivers){
        result = returnFirstTwoDrivers(drivers)
    }
    else {
        result = returnLastTwoDrivers(drivers);
    }

    return result;
}