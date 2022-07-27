import Util from "./util";

let util: Util | null = null

beforeAll(() => {
  util = new Util()
})

test('test util.a function', () => {
  // expect(util.a(1, 2)).toBe('12')
  // 
});