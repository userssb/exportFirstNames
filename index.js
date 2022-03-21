// const names = require("../country/state/city/index");
// const getFirstNames = require("../utilities/utils/index");
// function getPeopleInCity() {
//   getFirstNames(names);
// }
// module.exports = getPeopleInCity;

// console.log(getFirstNames(names));
// module.exports = getFirstNames;

const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
