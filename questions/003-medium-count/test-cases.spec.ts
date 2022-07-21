import count from "./template";

const arr = [1, 2, 3, 4, 5, 6]
describe('first: count only ', () => {
  it.skip('a + b = c', () => {
    expect(count(arr, 1)).toBe(1)
    expect(count(arr, 2)).toBe(1)
    expect(count(arr, 3)).toBe(1)
    expect(count(arr, 4)).toBe(1)
  });
});