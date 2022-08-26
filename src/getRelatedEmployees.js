const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const listaDeManagers = [];
  employees.forEach((elemento) => elemento.managers
    .forEach((e) => listaDeManagers.push(e)));
  return listaDeManagers.some((i) => i === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((elemento) => elemento.managers.includes(managerId))
    .map((pessoas) => `${pessoas.firstName} ${pessoas.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
