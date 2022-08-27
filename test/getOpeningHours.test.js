const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa parâmetro vazio', () => {
    expect(getOpeningHours()).toEqual(expect.objectContaining({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    }));
  });
  it('testa se parâmetro é Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testa se parâmetro é Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('testa se parâmetro é Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('testa se parâmetro é Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error);
  });
  it('testa se parâmetro é Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error);
  });
  it('testa se parâmetro é Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error);
  });
  it('testa se parâmetro é Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error);
  });
  it('testa se parâmetro é Monday e 13:00-AM', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error);
  });
  it('testa se parâmetro é Tuesday e 09:60-AM', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
