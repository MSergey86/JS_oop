import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(health, level);

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string') {
      throw new Error('name должен быть string');
    }
    if ((name.length > 10) || (name.length < 2)) {
      throw new Error('name должен быть длиной от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (types.includes(type) === false) {
      throw new Error('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    } else {
      this.type = type;
    }

    this.attack = 40;
    this.defence = 10;
  }
}
