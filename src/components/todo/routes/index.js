const TodoScreen = () => import('@/components/todo/TodoScreen')

export default [{
  path: '/todo/:id?',
  props: true,
  meta: {
    localePart: ['todos']
  },
  component: TodoScreen
}]
