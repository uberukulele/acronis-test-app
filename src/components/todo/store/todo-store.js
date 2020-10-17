import { make } from 'vuex-pathify'
import Backend from '@/backend'
import Vuex from 'vuex'

const state = () => ({
  todos: [],
  loading: false
})

const getters = make.getters(state)
const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),

  async fetchTodos ({ dispatch }) {
    dispatch('setLoading', true)
    try {
      let todos = await Backend.fetchTodos()
      dispatch('setTodos', todos)
    } finally {
      dispatch('setLoading', false)
    }

  },

  async createTodo ({ dispatch, getters }, newTodo) {
    dispatch('setLoading', true)

    let todos = getters.todos || []
    try {
      let todo = await Backend.createTodo(newTodo)
      dispatch('setTodos', [todo, ...todos])
    } catch (e) {
      dispatch('setTodos', [...todos])
      throw e
    } finally {
      dispatch('setLoading', false)
    }
  },

  async updateTodo ({ dispatch, getters }, todo) {
    dispatch('setLoading', true)

    let todos = getters.todos
    try {
      await Backend.updateTodo(todo)
      let resultTodos = todos.slice()
      let targetTodoIndex = todos.findIndex(({ id }) => id === todo.id)

      if (targetTodoIndex >= 0) {
        resultTodos[targetTodoIndex] = todo
        dispatch('setTodos', resultTodos)
      }
    } catch (e) {
      dispatch('setTodos', todos.slice())
      throw e
    } finally {
      dispatch('setLoading', false)
    }
  },

  async deleteTodo ({ dispatch, getters }, todoId) {
    dispatch('setLoading', true)

    let todos = getters.todos
    try {
      await Backend.deleteTodo(todoId)
      let resultTodos = todos.slice()
      let targetTodoIndex = todos.findIndex(({ id }) => id === todoId)

      if (targetTodoIndex >= 0) {
        resultTodos.splice(targetTodoIndex, 1)
        dispatch('setTodos', resultTodos)
      }
    } catch (e) {
      dispatch('setTodos', todos.slice())
      throw e
    } finally {
      dispatch('setLoading', false)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
