import utils from '../src';

describe('utils.toStringArray', () => {
  test('no argument', () => {
    expect(utils.toStringArray()).toEqual([]);
  });

  test('1 argument', () => {
    expect(utils.toStringArray(undefined)).toEqual(['']);

    expect(utils.toStringArray(true)).toEqual(['true']);
    expect(utils.toStringArray(false)).toEqual(['false']);

    expect(utils.toStringArray(42)).toEqual(['42']);
    expect(utils.toStringArray(0)).toEqual(['0']);
    expect(utils.toStringArray(-0)).toEqual(['-0']);
    expect(utils.toStringArray(NaN)).toEqual(['NaN']);
    expect(utils.toStringArray(Infinity)).toEqual(['Infinity']);
    expect(utils.toStringArray(-Infinity)).toEqual(['-Infinity']);

    expect(utils.toStringArray('')).toEqual(['']);
    expect(utils.toStringArray('foo')).toEqual(['foo']);

    expect(utils.toStringArray(null)).toEqual(['']);

    expect(utils.toStringArray({})).toEqual(['[object Object]']);

    expect(utils.toStringArray([1, '2'])).toEqual(['1', '2']);
  });

  test('many argument', () => {
    expect(utils.toStringArray(
      undefined,
      true,
      false,
      42,
      0,
      -0,
      NaN,
      Infinity,
      -Infinity,
      '',
      'foo',
      null,
      {},
      [1, '2'],
    )).toEqual([
      '',
      'true',
      'false',
      '42',
      '0',
      '-0',
      'NaN',
      'Infinity',
      '-Infinity',
      '',
      'foo',
      '',
      '[object Object]',
      '1',
      '2',
    ]);
  });

  test('nested array', () => {
    expect(utils.toStringArray([1, [2, [3, [4, [5], 6], 7], 8], 9])).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ]);
  });
});
