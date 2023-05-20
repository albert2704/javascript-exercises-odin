const palindromes = function (str) {
    return str
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reverse()
    .join('') == str
    .toLowerCase()
    .replace(/[^a-z]/g, '')
};

// Do not edit below this line
module.exports = palindromes;
