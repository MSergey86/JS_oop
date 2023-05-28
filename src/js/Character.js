export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    this.level += 1;
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    } else {
      this.health = 100;
    }
    this.attack = (this.attack * 0.2) + this.attack;
    this.defence = (this.defence * 0.2) + this.defence;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      return false;
    }
  }
}
