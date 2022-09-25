import Shordsman from '../Swordsman';

test('Проверка вывода ошибки при не правильном вводе типа', () => {
  expect(() => new Shordsman('Ron', 'Shotsman')).toThrow();
})

test("Проверка вывода ошибки при не правильном вводе типа", () => {
  expect(() => new Shordsman("Ron", "Shordsman")).not.toThrow();
});