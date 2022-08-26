const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  if (employees.some((elemento) => elemento.firstName === employeeName)) {
    return employees.find((nome) => nome.firstName === employeeName);
  }
  if (employees.some((elemento) => elemento.lastName === employeeName)) {
    return employees.find((sobrenome) => sobrenome.lastName === employeeName);
  }
}

module.exports = getEmployeeByName;
