const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const dias = {
  Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Tuesday')).map((e) => e.name) },
  Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Wednesday')).map((e) => e.name) },
  Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Thursday')).map((e) => e.name) },
  Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Friday')).map((e) => e.name) },
  Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Saturday')).map((e) => e.name) },
  Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((e) => e.availability
      .find((el) => el === 'Sunday')).map((e) => e.name) },
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};

const isAnimal = (scheduleTarget) => species.some((e) => e.name === scheduleTarget);

// const isDay = (scheduleTarget) => {
//   if (scheduleTarget !== 'Monday' && !isAnimal(scheduleTarget)) {
//     return species.some((e) => e.availability.some((el) => el === scheduleTarget));
//   }
//   if (scheduleTarget === 'Monday') {
//     return dias.Monday;
//   }
//   return false;
// };

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !isAnimal(scheduleTarget)) {
    return dias;
  }
  if (isAnimal(scheduleTarget)) {
    return species.find((e) => e.name === scheduleTarget).availability;
  }
  // if (isDay(scheduleTarget)) {
  //   return dias[scheduleTarget];
  // }
}

module.exports = getSchedule;
