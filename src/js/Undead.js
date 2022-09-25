import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
    if (type !== 'Undead') {
      throw new Error('Ошибка! Неверно указан тип');
    }
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
