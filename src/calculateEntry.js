const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const crianca = entrants.filter((element) => element.age < 18);
  const adulto = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50);
  const veio = entrants.filter((e) => e.age >= 50);
  const entrada = {
    child: crianca.length,
    adult: adulto.length,
    senior: veio.length,
  };
  return entrada;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.values(countEntrants(entrants))[0] * 20.99
  + Object.values(countEntrants(entrants))[1] * 49.99
  + Object.values(countEntrants(entrants))[2] * 24.99;
}

module.exports = { calculateEntry, countEntrants };

calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]);
