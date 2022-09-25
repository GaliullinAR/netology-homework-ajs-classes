import Character from '../Character';

test('Проверка неправильного ввода данных', () => {
  expect(() => new Character('r', 'Undead')).toThrow();
});

test('Проверка правильного ввода данных', () => {
  expect(() => new Character('ron', 'Undead')).not.toThrow();
});

test('Проверка создания экземпляра объекта', () => {
  const result = new Character('Ron', 'Undead');
  result.attack = 10;
  result.defence = 40;
  const expected = {
    name: 'Ron',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expected);
});

test('Проверка метода levelUp', () => {
  const result = new Character('Ron', 'Undead');
  result.attack = 10;
  result.defence = 40;
  result.levelUp();
  const expected = {
    name: 'Ron',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(result).toEqual(expected);
});

test('Проверка вызова ошибки в методе levelUp', () => {
  const result = new Character('Ron', 'Undead');
  result.level = 0;
  expect(() => result.levelUp()).toThrow();
});

test('Проверка вызова метода damage', () => {
  const result = new Character('Ron', 'Undead');
  result.attack = 10;
  result.defence = 40;
  result.damage(3);
  expect(result.health).toEqual(98.2);
});
