const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, curr) => {
    const especies = species.find((animal) => animal.id === curr);
    acc.push(especies);
    return acc;
  }, []);
}

module.exports = getSpeciesByIds;
