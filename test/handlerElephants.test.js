const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa parâmetro vazio', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('testa se parâmetro é diferente de string', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa o parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se parâmetro names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('testa se a idade média dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('testa se parâmetro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('testa se parâmetro popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('testa se parâmetro availability', () => {
    expect(handlerElephants('availability')).toContain('Tuesday');
  });
  it('testa se parâmetro é uma string qualquer', () => {
    expect(handlerElephants('uma string qualquer')).toBe(null);
  });
});
