import Bowerman from '../Bowerman';

const initialBow = ['лучник', 'Bowman', 100, 1, 25, 25];

test('bowInitial', () => {
  const bow = new Bowerman('лучник', 'Bowman');
  const result = [bow.name, bow.type, bow.health, bow.level, bow.attack, bow.defence];
  expect(result).toStrictEqual(initialBow);
});

test('errLengthBow', () => {
  expect(() => {
    const bow = new Bowerman('лучникttgtgtgtgtgtg', 'Bowman');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringBow', () => {
  expect(() => {
    const bow = new Bowerman(55, 'Bowman');
  }).toThrow('name должен быть string');
});
test('errStringBow', () => {
  expect(() => {
    const bow = new Bowerman('лучник', 'Bowmannn');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
