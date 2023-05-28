import Bowerman from '../Bowerman';

test('bowDamage', () => {
  const bow = new Bowerman('лучник', 'Bowman');
  bow.damage(10);
  const result = bow.health;
  expect(result).toBe(92.5);
});

test('bowLevelUp', () => {
  const bow = new Bowerman('лучник', 'Bowman');
  bow.health = 90;
  const exp = [100, 2, 30, 30];
  bow.levelUp();
  const result = [bow.health, bow.level, bow.attack, bow.defence];
  expect(result).toStrictEqual(exp);
});

test('bowDamage', () => {
  const bow = new Bowerman('лучник', 'Bowman');
  bow.health = -15;
  const result = bow.damage(10);
  expect(result).toStrictEqual(false);
});
test('errLevelUp', () => {
  const bow = new Bowerman('лучник', 'Bowman');
  bow.health = 0;
  expect(() => {
    bow.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});
