const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalProcurado = species.find((elemento) => elemento.name === animal);
  // console.log(animalProcurado.residents);
  return animalProcurado.residents.every((objeto) => objeto.age > age);
  // (elemento.age > age) ? );
}
// console.log(getAnimalsOlderThan('lions', 2));
module.exports = getAnimalsOlderThan;
