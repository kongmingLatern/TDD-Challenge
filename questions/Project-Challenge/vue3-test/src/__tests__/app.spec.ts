import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import App from "../App.vue";
describe("My First Test", () => {
  it('App.vue should have text "app"', () => {
    const wrapper = shallowMount(App);
    const button = wrapper.find('[data-test="button"]');
    expect(button.text()).toBe("button");
  });
});
