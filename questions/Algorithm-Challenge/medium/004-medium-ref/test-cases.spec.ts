import ref from "./template";

describe('test Vue3 Ref', () => {
  it('a.value should be 1', () => {
    const a = ref(1)
    expect(a.value).toBe(1)
  });
});