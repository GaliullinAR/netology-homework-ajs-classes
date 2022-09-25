import Deamon from "../Deamon";

test("Проверка вывода ошибки при не правильном вводе типа", () => {
  expect(() => new Deamon("Ron", "Damon")).toThrow();
});

test("Проверка коректности ввода типа", () => {
  expect(() => new Deamon("Ron", "Deamon")).not.toThrow();
});
