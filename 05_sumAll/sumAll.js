const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    if (numOne > numTwo) {
        let x = numOne;
        numOne = numTwo;
        numTwo = x;
    }

    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR";
    }
    
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
