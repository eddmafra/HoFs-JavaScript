const { prices } = require('../data/zoo_data');
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
  return Object.values(countEntrants(entrants))[0] * prices.child
  + Object.values(countEntrants(entrants))[1] * prices.adult
  + Object.values(countEntrants(entrants))[2] * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
