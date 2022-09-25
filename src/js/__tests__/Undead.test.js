import Undead from '../Undead';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Undead('Ron', 'dead')).toThrow();
});

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Undead('Ron', 'Undead')).not.toThrow();
});

test('Проверка корректного создания экзепляра объекта', () => {
  const result = new Undead('Ron', 'Undead');
  const expected = {
    name: 'Ron',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
