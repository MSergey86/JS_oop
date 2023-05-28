import Daemon from '../Daemon';

const initialDaemon = ['демон', 'Daemon', 100, 1, 10, 40];

test('initialDaemon', () => {
  const daem = new Daemon('демон', 'Daemon');
  const result = [daem.name, daem.type, daem.health, daem.level, daem.attack, daem.defence];
  expect(result).toStrictEqual(initialDaemon);
});

test('errLengthDaemon', () => {
  expect(() => {
    const daem = new Daemon('демонhyyjdjydjyjdyjt', 'Daemon');
  }).toThrow('name должен быть длиной от 2 до 10 символов');
});
test('errStringDaemon', () => {
  expect(() => {
    const daem = new Daemon(676, 'Daemon');
  }).toThrow('name должен быть string');
});
test('errStringDaemon', () => {
  expect(() => {
    const daem = new Daemon('демон', 'Daemonghgf');
  }).toThrow('type должен быть из списка: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
