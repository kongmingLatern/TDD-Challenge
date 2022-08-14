// 封装一些关于 vue utils 的方法
import type { DOMWrapper, VueWrapper } from "@vue/test-utils";

export const getTargetElement = (
  Wrapper: VueWrapper<any>,
  target: string
): DOMWrapper<any> => {
  const domWrapper: DOMWrapper<any> = Wrapper.find(target);
  return domWrapper;
};
