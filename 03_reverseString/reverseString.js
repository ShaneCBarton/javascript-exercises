const reverseString = function(stringToReverse) {
    let chars = [];
    for (let i = 0; i < stringToReverse.length; i++) {
        chars.push(stringToReverse[i]);
    }

    let reversedString = chars.reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
