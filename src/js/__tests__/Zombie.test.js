import Zombie from '../Zombie';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Zombie('Ron', 'zomb')).toThrow();
});

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Zombie('Ron', 'Zombie')).not.toThrow();
});
