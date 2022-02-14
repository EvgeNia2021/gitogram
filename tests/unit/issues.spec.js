import { issues } from '../../src/components/issues'
import { mount } from '@vue/test-utils'

describe('issues component', () => {
  it('run loadIssues emit', async () => {
    const wrapper = mount(issues)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('correct number of issues is rendered', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({length: 5}).map(x => issue)
      }
    })

    expect(wrapper.find('.comments__list').exists()).toBe(false)
    
    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comments__item').length).toBe(5)
  })

  it('doesnt run loadIssues if they have already been requested', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({length: 5}).map(x => issue)
      }
    })
    
    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
  it('Placeholder shown', async () => {
    const wrapper = mount(issues, {
      propsData: {
        loading: true
      }
    })
    expect(wrapper.find('.comments__placeholder .placeholder').exists()).toBe(false)
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.find('.comments__placeholder .placeholder').exists()).toBe(true)
  })
})


