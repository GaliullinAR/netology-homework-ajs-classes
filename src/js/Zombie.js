import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    if (type !== 'Zombie') {
      throw new Error('Ошибка! Неверно указан тип');
    }
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
