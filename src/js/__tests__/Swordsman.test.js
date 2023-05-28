import Swordsman from '../Swordsman';

const initialSword = ['мечник', 'Swordsman', 100, 1, 40, 10];

test('initialSword', () => {
  const sword = new Swordsman('мечник', 'Swordsman');
  const result = [sword.name, sword.type, sword.health, sword.level, sword.attack, sword.defence];
  expect(result).toStrictEqual(initialSword);
});

test('errLengthSwordsman', () => {
  expect(() => {
    const sword = new Swordsman('мечникtbgbgbgbg', 'Swordsman');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringSwordsman', () => {
  expect(() => {
    const sword = new Swordsman(66, 'Swordsman');
  }).toThrow('name должен быть string');
});
test('errStringSwordsman', () => {
  expect(() => {
    const sword = new Swordsman('мечник', 'Swordsmangrg');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
