import Deamon from '../Deamon';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Deamon('Ron', 'Damon')).toThrow();
});

test('Проверка коректности ввода типа', () => {
  expect(() => new Deamon('Ron', 'Deamon')).not.toThrow();
});

test("Проверка корректного создания экзепляра объекта", () => {
  const result = new Deamon("Ron", "Deamon");
  const expected = {
    name: "Ron",
    type: "Deamon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});