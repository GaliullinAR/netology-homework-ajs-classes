import Undead from '../Undead';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Undead('Ron', 'dead')).toThrow();
});

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Undead('Ron', 'Undead')).not.toThrow();
});
