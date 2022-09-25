import Magician from '../Magician';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Magician('Ron', 'Mag')).toThrow();
});

test('Проверка коректности ввода типа', () => {
  expect(() => new Magician('Ron', 'Magician')).not.toThrow();
});

test('Проверка корректного создания экзепляра объекта', () => {
  const result = new Magician('Ron', 'Magician');
  const expected = {
    name: 'Ron',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
