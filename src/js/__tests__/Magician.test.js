import Magician from '../Magician';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Magician('Ron', 'Mag')).toThrow();
});

test('Проверка коректности ввода типа', () => {
  expect(() => new Magician('Ron', 'Magician')).not.toThrow();
});
