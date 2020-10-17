import { generateID, getLocalData, setLocalData } from '@/utils'

//errors code
const TODO_NOT_FOUND = '1'
const SERVER_IS_DOWN = '2'


function readAction (key) {
  return getLocalData(key)
}

function writeAction (key, data) {
  setLocalData(key, data)
}

function request ({ type, key, data, possibleError }) {
  return new Promise((resolve, reject) => {
    // fake http request delay - 500ms
    setTimeout(() => {
      // backend server can throw errors sometimes
      if (Math.random() > 0.1) {
        switch (type) {
          case 'read':
            resolve(readAction(key))
            break
          case 'write':
            resolve(writeAction(key, data))
            break
          default:
            reject(new Error(`The "${type}" is wrong request type. Allowed types are "read", "write"`))
        }
      } else {
        let error = new Error('Request error')
        error.code = possibleError
        reject(error)
      }
    }, 500)
  })

}

export default {
  async fetchTodos () {
    return await request({
      type: 'read',
      key: 'todos',
      possibleError: SERVER_IS_DOWN
    }) || []
  },

  async createTodo (newTodo) {
    let todos = readAction('todos') || []
    let todo = {
      ...newTodo,
      id: generateID()
    }

    todos.unshift(todo)

    await request({
      type: 'write',
      key: 'todos',
      data: todos,
      possibleError: SERVER_IS_DOWN
    })

    return todo
  },

  updateTodo (todo) {
    let possibleError = TODO_NOT_FOUND
    let todos = readAction('todos') || []
    let todoIndex = todos.findIndex(({ id }) => id === todo.id)

    if (todoIndex >= 0) {
      todos[todoIndex] = todo

      return request({
        type: 'write',
        key: 'todos',
        data: todos,
        possibleError
      })
    } else {
      return Promise.reject(possibleError)
    }
  },

  deleteTodo (todoId) {
    let possibleError = SERVER_IS_DOWN
    let todos = readAction('todos') || []
    let todoIndex = todos.findIndex(({ id }) => id === todoId)

    if (todoIndex >= 0) {
      todos.splice(todoIndex, 1)

      return request({
        type: 'write',
        key: 'todos',
        data: todos,
        possibleError
      })
    } else {
      return Promise.reject(possibleError)
    }
  }
}
