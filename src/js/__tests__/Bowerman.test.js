import Bowerman from '../Bowerman';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Bowerman('Ron', 'Bowman')).toThrow();
});

test('Проверка коректности ввода типа', () => {
  expect(() => new Bowerman('Ron', 'Bowerman')).not.toThrow();
});

test('Проверка корректного создания экзепляра объекта', () => {
  const result = new Bowerman('Ron', 'Bowerman');
  const expected = {
    name: 'Ron',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
