import { make } from 'vuex-pathify'
import { showError } from '@/notifications'
import Backend from '@/backend'
import Vuex from 'vuex'

const state = () => ({
  todos: []
})

const getters = make.getters(state)
const mutations = make.mutations(state)
const actions = {
  ...make.actions(state),

  async fetch ({ dispatch }) {
    try {
      let todos = await Backend.fetchTodos()
      dispatch('setTodos', todos)
    } catch (e) {
      console.log(e)
      showError(e.message)
    }
  },

  async createTodo ({ dispatch, getters }, newTodo) {
    let todos = getters.todos
    try {
      let todo = await Backend.createTodo(newTodo)
      dispatch('setTodos', [...todos, todo])
    } catch (e) {
      dispatch('setTodos', [...todos])
      showError(e.message)
    }
  },

  async updateTodo ({ dispatch, getters }, todo) {
    let todos = getters.todos
    try {
      await Backend.updateTodo(todo)
      let resultTodos = todos.slice()
      let targetTodoIndex = todos.findIndex(({ id }) => id === todo.id)

      if (targetTodoIndex >= 0) {
        resultTodos[targetTodoIndex] = todo
        dispatch('setTodos', resultTodos)
      } else {
        showError('Todo not found')
      }
    } catch (e) {
      dispatch('setTodos', [...todos])
      showError(e.message)
    }
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
})
