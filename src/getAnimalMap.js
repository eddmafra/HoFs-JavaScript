const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const createObject = () => species.reduce((acc, animal) => {
  const siglaLocation = animal.location;
  if (!acc[siglaLocation]) {
    acc[siglaLocation] = [];
  }
  return acc;
}, {});

const noParam = () => {
  const obj = createObject();
  species.forEach((animal) => {
    const siglaLocation = animal.location;
    const nomeAnimal = animal.name;
    obj[siglaLocation].push(nomeAnimal);
  });
  return obj;
};

const namesIncluded = () => {
  const obj = createObject();
  species.forEach((animal) => {
    const siglaLocation = animal.location;
    const nomeAnimal = animal.name;
    obj[siglaLocation].push({
      [nomeAnimal]: animal.residents.map((ind) => ind.name),
    });
  });
  return obj;
};

const namesSorted = () => {
  const obj = namesIncluded();
  Object.keys(obj)
    .forEach((location) => obj[location].forEach((e) => e[Object.keys(e)].sort()));
  return obj;
};

const sexIncluded = (param) => {
  const obj = createObject();
  species.forEach((animal) => {
    const siglaLocation = animal.location;
    const nomeAnimal = animal.name;
    obj[siglaLocation].push({
      [nomeAnimal]: animal.residents.filter((ind) => ind.sex === param.sex).map((e) => e.name),
    });
  });
  if (!param.sorted) {
    return obj;
  }
  Object.keys(obj)
    .forEach((location) => obj[location].forEach((e) => e[Object.keys(e)].sort()));
  return obj;
};

const opc2 = (options) => {
  if (options.sex) return sexIncluded(options);
  return namesIncluded();
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noParam();
  if (options.sorted && !options.sex) return namesSorted();
  // if (options.sex) return sexIncluded(options);
  // return namesIncluded();
  return opc2(options);
}

// parametros: { includeNames: true, sex: male, sorted: true}

module.exports = getAnimalMap;
