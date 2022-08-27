const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    return species.filter((elemento) => elemento.name === Object.values(animal)[0])
      .reduce((acc, cur) => acc + cur.residents.length, 0);
  }
  if (Object.keys(animal).length === 2) {
    return species.filter((elemento) => elemento.name === Object.values(animal)[0])[0].residents
      .filter((e) => e.sex === Object.values(animal)[1]).length;
  }
}

// console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;
