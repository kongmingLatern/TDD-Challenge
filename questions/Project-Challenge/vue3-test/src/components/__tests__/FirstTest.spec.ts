import { shallowMount } from "@vue/test-utils";
import { getTargetElement } from "../../utils";
import { describe, it } from "vitest";
import FirstTest from "../FirstTest.vue";
describe("FirstTest.vue", () => {
  it('we should have a text about "hello"', () => {
    const button = getTargetElement(
      shallowMount(FirstTest),
      '[data-test="button"]'
    );
    expect(button.text()).toBe("hello");
  });
});
