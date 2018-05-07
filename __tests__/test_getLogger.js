/* eslint no-console: off */

import cliWidth from 'cli-width';

import utils from '../src';

describe('utils.getLogger', () => {
  const logger = utils.getLogger('test');

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('separator', () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(x => x);

    logger.separator();
    expect(console.log).toBeCalled();
    expect(spy.mock.calls[0][0]).toBe('');
    expect(spy.mock.calls[1][0]).toBe(`[test] ${'-'.repeat(cliWidth() - 7)}`);
    expect(spy.mock.calls[2][0]).toBe('');
  });

  test('log', () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(x => x);

    logger.log('foo', 'bar', 'baz');
    expect(console.log).toBeCalled();
    expect(spy.mock.calls[0][0]).toBe('[test]');
    expect(spy.mock.calls[0][1]).toBe('foo');
    expect(spy.mock.calls[0][2]).toBe('bar');
    expect(spy.mock.calls[0][3]).toBe('baz');
  });

  test('debug', () => {
    const spy = jest.spyOn(console, 'debug');
    spy.mockImplementation(x => x);

    logger.debug('foo', 'bar', 'baz');
    expect(console.debug).toBeCalled();
    expect(spy.mock.calls[0][0]).toBe('[test]');
    expect(spy.mock.calls[0][1]).toBe('foo');
    expect(spy.mock.calls[0][2]).toBe('bar');
    expect(spy.mock.calls[0][3]).toBe('baz');
  });

  test('info', () => {
    const spy = jest.spyOn(console, 'info');
    spy.mockImplementation(x => x);

    logger.info('foo', 'bar', 'baz');
    expect(console.info).toBeCalled();
    expect(spy.mock.calls[0][0]).toBe('[test]');
    expect(spy.mock.calls[0][1]).toBe('foo');
    expect(spy.mock.calls[0][2]).toBe('bar');
    expect(spy.mock.calls[0][3]).toBe('baz');
  });

  test('warn', () => {
    const spy = jest.spyOn(console, 'warn');
    spy.mockImplementation(x => x);

    logger.warn('foo', 'bar', 'baz');
    expect(console.warn).toBeCalled();
    expect(spy.mock.calls[0][0]).toBe('[test]');
    expect(spy.mock.calls[0][1]).toBe('foo');
    expect(spy.mock.calls[0][2]).toBe('bar');
    expect(spy.mock.calls[0][3]).toBe('baz');
  });

  test('error', () => {
    const spyLog = jest.spyOn(console, 'log');
    const spyError = jest.spyOn(console, 'error');
    spyLog.mockImplementation(x => x);
    spyError.mockImplementation(x => x);

    logger.error('foo', 'bar', 'baz');
    expect(console.log).toBeCalled();
    expect(console.error).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toBe('');
    expect(spyLog.mock.calls[1][0]).toBe(`[test] ${'-'.repeat(cliWidth() - 7)}`);
    expect(spyLog.mock.calls[2][0]).toBe('');
    expect(spyError.mock.calls[0][0]).toBe('foo');
    expect(spyError.mock.calls[0][1]).toBe('bar');
    expect(spyError.mock.calls[0][2]).toBe('baz');
    expect(spyLog.mock.calls[3][0]).toBe('');
    expect(spyLog.mock.calls[4][0]).toBe(`[test] ${'-'.repeat(cliWidth() - 7)}`);
    expect(spyLog.mock.calls[5][0]).toBe('');
  });
});
