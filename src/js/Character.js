export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя должно сожержать не менее 2 и не более 10 символов');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = '';
    this.defence = '';
  }

  levelUp() {
    if (this.level !== 0) {
      this.level += 1;
      this.attack += (this.attack * 0.2);
      this.defence += (this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умерешего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
