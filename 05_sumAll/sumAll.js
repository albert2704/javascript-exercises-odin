const sumAll = function(a, b) {
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let result = 0;
    for(let i = a; i <= b; i++) {
        result += i; 
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
