const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpecies = (id) => employees.find((e) => e.id === id).responsibleFor[0];

function getOldestFromFirstSpecies(id) {
  const veiao = species.find((e) => e.id === getSpecies(id)).residents
    .reduce((acc, cur) => {
      if (acc.age > cur.age) {
        return acc;
      }
      return cur;
    });
  return Object.values(veiao);
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
