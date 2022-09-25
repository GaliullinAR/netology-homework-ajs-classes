import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    if (type !== 'Magician') {
      throw new Error('Ошибка! Неверно указан тип');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
