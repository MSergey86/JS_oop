import Magician from '../Magician';

const initialMagician = ['маг', 'Magician', 100, 1, 10, 40];

test('initialMagician', () => {
  const mag = new Magician('маг', 'Magician');
  const result = [mag.name, mag.type, mag.health, mag.level, mag.attack, mag.defence];
  expect(result).toStrictEqual(initialMagician);
});

test('errLengthMagician', () => {
  expect(() => {
    const mag = new Magician('магhthghghghghghg', 'Magician');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringMagician', () => {
  expect(() => {
    const mag = new Magician(88, 'Magician');
  }).toThrow('name должен быть string');
});
test('errStringMagician', () => {
  expect(() => {
    const mag = new Magician('маг', 'Magiciangtgt');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
