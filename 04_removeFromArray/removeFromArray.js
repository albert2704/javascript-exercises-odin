const removeFromArray = function(arr, ...rm) {
    rm.forEach(item => {
        let index = arr.indexOf(item);
        if(index != -1) {
            arr.splice(index, 1);
        } 
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
