import { mount, shallowMount } from '@vue/test-utils'
import TodoListItem from '@/components/todo/components/TodoListItem.vue'

const mockedUpdateTodo = jest.spyOn(TodoListItem.methods, 'updateTodo')
const mockedDeleteTodo = jest.spyOn(TodoListItem.methods, 'maybeDeleteTodo')

const getWrapper = (shallow = false) => {
  let todos = [{
    id: 1,
    text: 'Test',
    done: false
  }, {
    id: 2,
    text: 'Test 1',
    done: true
  }]

  let mountMethod = shallow ? shallowMount : mount

  return mountMethod(TodoListItem, {
    propsData: {
      todo: todos[1]
    },
    mocks: {
      $t: msg => msg
    }
  })
}

describe('TodoListItem', () => {
  it('Should render', () => {
    expect(getWrapper().find('.todo-list-item').isVisible()).toBeTruthy()
  })

  it('Should call updateTodo on checkbox click', () => {
    let wrapper = getWrapper()
    wrapper.find('.el-checkbox input').trigger('click')
    expect(mockedUpdateTodo).toHaveBeenCalled()
  })

  it('Should call maybeDeleteTodo on delete btn click', () => {
    let wrapper = getWrapper()
    wrapper.find('.el-icon-close').trigger('click')
    expect(mockedDeleteTodo).toHaveBeenCalled()
  })

  it('Snapshot test', () => {
    const wrapper = getWrapper(true)
    expect(wrapper.element).toMatchSnapshot()
  })
})
