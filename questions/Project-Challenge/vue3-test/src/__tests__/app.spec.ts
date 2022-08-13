import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest';
import App from '../App.vue'
describe('My First Test', () => {
  it('App.vue should have text "app"', () => {
    const wrapper = shallowMount(App)
    console.log(wrapper);

  })

});