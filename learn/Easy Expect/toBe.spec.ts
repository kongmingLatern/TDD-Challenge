describe('test toBe', () => {
  it('Use .toBe to compare primitive values or to check referential identity of object instances. It calls Object.is to compare values, which is even better for testing than === strict equality operator.', () => {
    expect(2).toBe(2)
  });
});