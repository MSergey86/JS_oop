import Undead from '../Undead';

const initialUndead = ['нежить', 'Undead', 100, 1, 25, 25];

test('initialUndead', () => {
  const undead = new Undead('нежить', 'Undead');
  const result = [undead.name, undead.type, undead.health, undead.level, undead.attack, undead.defence];
  expect(result).toStrictEqual(initialUndead);
});

test('errLengthUndead', () => {
  expect(() => {
    const undead = new Undead('нежитьthththththt', 'Undead');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringUndead', () => {
  expect(() => {
    const undead = new Undead(44, 'Undead');
  }).toThrow('name должен быть string');
});
test('errStringUndead', () => {
  expect(() => {
    const undead = new Undead('нежить', 'Undeadgrf');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
