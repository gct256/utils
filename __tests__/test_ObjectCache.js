import utils from '../src';

describe('utils.ObjectCache', () => {
  test('not hit', () => {
    const oc = new utils.ObjectCache();
    const mock = jest.fn();
    oc.get({ foo: 0, bar: 0 }, mock);
    expect(mock).toBeCalled();
  });

  test('hit', () => {
    const oc = new utils.ObjectCache();
    const mock = jest.fn();
    oc.get({ foo: 0, bar: 0 }, () => 'a');
    expect(oc.get({ foo: 0, bar: 0 }, mock)).toBe('a');
    expect(mock).not.toBeCalled();
  });

  test('cannot overwrite', () => {
    const oc = new utils.ObjectCache();
    oc.get({ foo: 0, bar: 0 }, () => 'a');
    expect(oc.get({ foo: 0, bar: 0 }, () => 'b')).toBe('a');
  });

  test('key is json', () => {
    const oc = new utils.ObjectCache();
    oc.get({ foo: 0, bar: 0 }, () => 'a');
    expect(oc.get({ bar: 0, foo: 0 }, () => 'b')).toBe('b');
  });
});
