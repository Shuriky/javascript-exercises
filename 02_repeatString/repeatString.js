const repeatString = function(myString, times) {
    if (times < 0) {
        return 'ERROR';
    }
    result = '';
    for (let i = 0; i < times; i++) {
        result += myString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
