const findTheOldest = function(arr) {
    let highest_age = -1;
    arr.forEach(ele => {
        if(ele.yearOfDeath === undefined) ele.yearOfDeath = (new Date()).getFullYear;
        let age = ele.yearOfDeath - ele.yearOfBirth;
        if(age > highest_age) highest_age = age;
    })
    return arr.filter(ele => {
        if(ele.yearOfDeath === undefined) ele.yearOfDeath = (new Date()).getFullYear;
        let age = ele.yearOfDeath - ele.yearOfBirth;
        return age === highest_age;
    })[0];
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
