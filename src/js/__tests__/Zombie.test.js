import Zombie from '../Zombie';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Zombie('Ron', 'zomb')).toThrow();
});

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Zombie('Ron', 'Zombie')).not.toThrow();
});

test("Проверка корректного создания экзепляра объекта", () => {
  const result = new Zombie("Ron", "Zombie");
  const expected = {
    name: "Ron",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});