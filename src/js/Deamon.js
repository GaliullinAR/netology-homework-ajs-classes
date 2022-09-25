import Character from './Character';

export default class Deamon extends Character {
  constructor(name, type) {
    if (type !== 'Deamon') {
      throw new Error('Ошибка! Неверно указан тип');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
