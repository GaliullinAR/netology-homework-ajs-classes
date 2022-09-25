import Bowerman from '../Bowerman'

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Bowerman('Ron', 'Bowman')).toThrow();
});

test('Проверка коректности ввода типа', () => {
  expect(() => new Bowerman('Ron', 'Bowerman')).not.toThrow();
})