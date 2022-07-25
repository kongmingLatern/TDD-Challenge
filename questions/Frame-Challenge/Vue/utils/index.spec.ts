import { isObject } from ".";

describe('utils', () => {
  it('isObject test1', () => {
    const obj = {}
    expect(isObject(obj)).toBe(true)
  });
  it('isObject test2', () => {
    const obj = {
      a: {
        b: 2
      }
    }
    expect(isObject(obj.a)).toBe(true)
  });
});