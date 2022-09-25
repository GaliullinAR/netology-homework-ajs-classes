import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    if (type !== 'Shordsman') {
      throw new Error('Ошибка! Неверно указан тип');
    }
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}