const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const verifyEmployee = (teste) => {
  const nome = employees.some((e) => e.firstName === teste.name);
  const sobrenome = employees.some((e) => e.lastName === teste.name);
  const ide = employees.some((e) => e.id === teste.id);
  if ((nome || sobrenome || ide)) {
    return true;
  }
  return false;
};

const getEmployee = (param) => {
  if (verifyEmployee(param)) {
    if (param.name) {
      return employees.find((e) => e.firstName === param.name || e.lastName === param.name);
    }
    if (param.id) {
      return employees.find((e) => e.id === param.id);
    }
  }
  throw new Error('Informações inválidas');
};

const getSpecies = (obj) => {
  const employee = getEmployee(obj);
  return species
    .filter((especie) => employee.responsibleFor.includes(especie.id)).map((animal) => animal.name);
};

const getFullName = (param) => `${getEmployee(param).firstName} ${getEmployee(param).lastName}`;

const getlocations = (param) => {
  const locations = [];
  getSpecies(param).forEach((e) => locations.push(species.find((el) => el.name === e).location));
  return locations;
};
const getObject = (param) => {
  const obj = {
    id: getEmployee(param).id,
    fullName: getFullName(param),
    species: getSpecies(param),
    locations: getlocations(param),
  };
  return obj;
};

function getEmployeesCoverage(param) {
  if (!param) {
    const arr = [];
    employees.forEach((e) => arr.push(getObject({ id: e.id })));
    return arr;
  }
  return getObject(param);
}

module.exports = getEmployeesCoverage;
