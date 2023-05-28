import Zombie from '../Zombie';

const initialZombie = ['зомби', 'Zombie', 100, 1, 40, 10];

test('initialZombie', () => {
  const zombie = new Zombie('зомби', 'Zombie');
  const result = [zombie.name, zombie.type, zombie.health, zombie.level, zombie.attack, zombie.defence];
  expect(result).toStrictEqual(initialZombie);
});

test('errLengthZombie', () => {
  expect(() => {
    const zombie = new Zombie('зомбиhhghgjghghgh', 'Zombie');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringZombie', () => {
  expect(() => {
    const zombie = new Zombie(5, 'Zombie');
  }).toThrow('name должен быть string');
});
test('errStringZombie', () => {
  expect(() => {
    const zombie = new Zombie('зомби', 'Zombiegrg');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
