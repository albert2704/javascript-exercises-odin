const fibonacci = function(num) {
    let arr = [];
    if(num == 0) return "INVALID"
    arr[0] = 1;
    arr[1] = 1;
    for(let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[num - 1];
};
// Do not edit below this line
module.exports = fibonacci;
