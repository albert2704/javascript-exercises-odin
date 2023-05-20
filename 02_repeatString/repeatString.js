const repeatString = function(para, num) {
    if(num < 0) return "Error";
    let result = '';
    for(let i = 1; i <= num; i++) {
        result += para;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
