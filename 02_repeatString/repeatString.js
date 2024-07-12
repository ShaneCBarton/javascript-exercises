const repeatString = function(string, iterations) {
    if (iterations < 0) {
        return "ERROR";
    }
    
    let newString = "";

    for (let i = 0; i < iterations; i++) {
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
