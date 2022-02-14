import { shallowMount } from '@vue/test-utils'
import { toggler } from '../../src/components/toggler'

describe('toggler component', () => {
  it("title change on click", async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.toggler__text').text()).toBe('View issues')
    await wrapper.find('.toggler__button').trigger('click')
    expect(wrapper.find('.toggler__text').text()).toBe('Hide issues')
  })
})
