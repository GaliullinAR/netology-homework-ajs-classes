import Shordsman from '../Swordsman';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Shordsman('Ron', 'Shotsman')).toThrow();
});

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Shordsman('Ron', 'Shordsman')).not.toThrow();
});

test('Проверка корректного создания экзепляра объекта', () => {
  const result = new Shordsman('Ron', 'Shordsman');
  const expected = {
    name: 'Ron',
    type: 'Shordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
