import utils from '../src';

describe('utils.isFiniteValue', () => {
  test('1 finite value', () => {
    expect(utils.isFiniteValue(0)).toBe(true);
    expect(utils.isFiniteValue('0')).toBe(true);
    expect(utils.isFiniteValue([0])).toBe(true);

    expect(utils.isFiniteValue(42)).toBe(true);
    expect(utils.isFiniteValue('42')).toBe(true);
    expect(utils.isFiniteValue([42])).toBe(true);
  });

  test('1 not finite value', () => {
    expect(utils.isFiniteValue(NaN)).toBe(false);
    expect(utils.isFiniteValue(Infinity)).toBe(false);
    expect(utils.isFiniteValue(-Infinity)).toBe(false);

    expect(utils.isFiniteValue('string')).toBe(false);
    expect(utils.isFiniteValue(null)).toBe(false);
    expect(utils.isFiniteValue({})).toBe(false);
  });

  test('many finite values', () => {
    expect(utils.isFiniteValue(0, '0', [0])).toBe(true);
  });

  test('many not finite value', () => {
    expect(utils.isFiniteValue(NaN, Infinity, -Infinity, 'string', null, {})).toBe(false);
  });

  test('mixed', () => {
    expect(utils.isFiniteValue(0, '0', [0], NaN, Infinity, -Infinity, 'string', null, {})).toBe(false);
  });
});
