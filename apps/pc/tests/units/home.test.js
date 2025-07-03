import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Home from '../src/views/home/home.vue'

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('张三')
  })
})