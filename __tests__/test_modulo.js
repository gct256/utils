import utils from '../src';

describe('utils.modulo', () => {
  test('NaN', () => {
    expect(utils.modulo(NaN, 3)).toBe(NaN);
    expect(utils.modulo(3, NaN)).toBe(NaN);
    expect(utils.modulo(NaN, NaN)).toBe(NaN);
  });

  test('integer', () => {
    expect(utils.modulo(0, 0)).toBe(NaN);
    expect(utils.modulo(-1, 0)).toBe(NaN);
    expect(utils.modulo(1, 0)).toBe(NaN);

    expect(utils.modulo(0, 3)).toBe(0);
    expect(utils.modulo(1, 3)).toBe(1);
    expect(utils.modulo(2, 3)).toBe(2);
    expect(utils.modulo(3, 3)).toBe(0);
    expect(utils.modulo(4, 3)).toBe(1);

    expect(utils.modulo(-0, 3)).toBe(0);
    expect(utils.modulo(-1, 3)).toBe(2);
    expect(utils.modulo(-2, 3)).toBe(1);
    expect(utils.modulo(-3, 3)).toBe(0);
    expect(utils.modulo(-4, 3)).toBe(2);

    expect(utils.modulo(0, -3)).toBe(0);
    expect(utils.modulo(1, -3)).toBe(-2);
    expect(utils.modulo(2, -3)).toBe(-1);
    expect(utils.modulo(3, -3)).toBe(0);
    expect(utils.modulo(4, -3)).toBe(-2);

    expect(utils.modulo(-0, -3)).toBe(0);
    expect(utils.modulo(-1, -3)).toBe(-1);
    expect(utils.modulo(-2, -3)).toBe(-2);
    expect(utils.modulo(-3, -3)).toBe(0);
    expect(utils.modulo(-4, -3)).toBe(-1);
  });

  test('float', () => {
    expect(utils.modulo(-1.1, 0)).toBe(NaN);
    expect(utils.modulo(1.1, 0)).toBe(NaN);

    expect(utils.modulo(0, 3.21)).toBe(0);
    expect(utils.modulo(0.01, 3.21)).toBe(0.01);
    expect(utils.modulo(3.2, 3.21)).toBe(3.2);
    expect(utils.modulo(3.21, 3.21)).toBe(0);
    expect(utils.modulo(3.22, 3.21)).toBe(0.010000000000000231);

    expect(utils.modulo(-0, 3.21)).toBe(0);
    expect(utils.modulo(-0.01, 3.21)).toBe(3.2);
    expect(utils.modulo(-3.2, 3.21)).toBe(0.009999999999999787);
    expect(utils.modulo(-3.21, 3.21)).toBe(0);
    expect(utils.modulo(-3.22, 3.21)).toBe(3.1999999999999997);

    expect(utils.modulo(0, -3.21)).toBe(0);
    expect(utils.modulo(0.01, -3.21)).toBe(-3.2);
    expect(utils.modulo(3.2, -3.21)).toBe(-0.009999999999999787);
    expect(utils.modulo(3.21, -3.21)).toBe(0);
    expect(utils.modulo(3.22, -3.21)).toBe(-3.1999999999999997);

    expect(utils.modulo(-0, -3.21)).toBe(0);
    expect(utils.modulo(-0.01, -3.21)).toBe(-0.01);
    expect(utils.modulo(-3.2, -3.21)).toBe(-3.2);
    expect(utils.modulo(-3.21, -3.21)).toBe(0);
    expect(utils.modulo(-3.22, -3.21)).toBe(-0.010000000000000231);
  });
});

// value based on python 3.6.4.
