import add from ".";

describe('Function Add', () => {
  it('1 + 1 should be 2', () => {
    const a: number = 1
    const b: number = 1
    expect(add(a, b)).toBe(2);
  });
});