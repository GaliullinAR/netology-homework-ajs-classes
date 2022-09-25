import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    if (type !== 'Bowerman') {
      throw new Error('Ошибка! неверно указан тип');
    }

    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}