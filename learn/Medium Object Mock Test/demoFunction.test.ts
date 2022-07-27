// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
/**
 * 相当于
 * const Util = jest.fn()
 * util.a = jest.fn()
 * util.b = jest.fn() 
 */
jest.mock('./util')

import Util from "./util"
import demoFunction from "./demoFunction"

test('test demoFunction', () => {
  demoFunction(1, 2)
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
});