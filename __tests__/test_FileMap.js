import utils from '../src';

describe('utils.FileMap', () => {
  test('1 : 1', () => {
    const fmap = new utils.FileMap();
    fmap.add('foo', 'bar');
    fmap.add('baz', 'qux');

    expect(fmap.check('foo')).toEqual(['foo']);
    expect(fmap.check('bar')).toEqual(['foo']);
    expect(fmap.check('baz')).toEqual(['baz']);
    expect(fmap.check('qux')).toEqual(['baz']);
    expect(fmap.check('quux')).toEqual([]);
  });

  test('1 : n', () => {
    const fmap = new utils.FileMap();
    fmap.add('foo', ['bar', 'baz', 'qux']);

    expect(fmap.check('foo')).toEqual(['foo']);
    expect(fmap.check('bar')).toEqual(['foo']);
    expect(fmap.check('baz')).toEqual(['foo']);
    expect(fmap.check('qux')).toEqual(['foo']);
    expect(fmap.check('quux')).toEqual([]);
  });

  test('n : 1', () => {
    const fmap = new utils.FileMap();
    fmap.add('bar', 'foo');
    fmap.add('baz', 'foo');
    fmap.add('qux', 'foo');

    expect(fmap.check('foo')).toEqual(['bar', 'baz', 'qux']);
    expect(fmap.check('bar')).toEqual(['bar']);
    expect(fmap.check('baz')).toEqual(['baz']);
    expect(fmap.check('qux')).toEqual(['qux']);
    expect(fmap.check('quux')).toEqual([]);
  });

  test('n : n', () => {
    const fmap = new utils.FileMap();
    fmap.add('foo', ['baz', 'qux']);
    fmap.add('bar', ['baz', 'qux']);

    expect(fmap.check('foo')).toEqual(['foo']);
    expect(fmap.check('bar')).toEqual(['bar']);
    expect(fmap.check('baz')).toEqual(['foo', 'bar']);
    expect(fmap.check('qux')).toEqual(['foo', 'bar']);
    expect(fmap.check('quux')).toEqual([]);
  });

  test('circular', () => {
    const fmap = new utils.FileMap();
    fmap.add('foo', 'foo');
    fmap.add('bar', 'baz');
    fmap.add('baz', 'bar');

    expect(fmap.check('foo')).toEqual(['foo']);
    expect(fmap.check('bar')).toEqual(['bar', 'baz']);
    expect(fmap.check('baz')).toEqual(['bar', 'baz']);
  });

  test('circular deep', () => {
    const fmap = new utils.FileMap();
    fmap.add('foo', 'bar');
    fmap.add('bar', 'baz');
    fmap.add('baz', 'qux');
    fmap.add('qux', 'foo');

    expect(fmap.check('foo')).toEqual(['foo', 'qux']);
    expect(fmap.check('bar')).toEqual(['foo', 'bar']);
    expect(fmap.check('baz')).toEqual(['bar', 'baz']);
    expect(fmap.check('qux')).toEqual(['baz', 'qux']);
  });

  test('multiple add', () => {
    const fmap = new utils.FileMap();
    fmap.add('bar', 'foo');
    fmap.add('bar', 'foo');
    fmap.add('baz', 'foo');
    fmap.add('baz', 'foo');

    expect(fmap.check('foo')).toEqual(['bar', 'baz']);
  });

  test('remove dependency', () => {
    const fmap = new utils.FileMap();
    fmap.add('bar', 'foo');
    fmap.add('baz', 'foo');
    fmap.add('qux', 'foo');

    fmap.remove('foo');
    expect(fmap.check('foo')).toEqual([]);
  });

  test('remove target', () => {
    const fmap = new utils.FileMap();
    fmap.add('bar', 'foo');
    fmap.add('baz', 'foo');
    fmap.add('qux', 'foo');

    fmap.remove('bar');
    expect(fmap.check('foo')).toEqual(['baz', 'qux']);
  });
});
