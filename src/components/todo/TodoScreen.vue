<template>
  <div :class="b()">
    <div :class="b('container')">
        <todo-create-form/>
    </div>
    alskdjalksjd;kasj;d
  </div>
</template>

<script>
  import TodoStore from './store/todo-store'
  import { mapActions, mapGetters } from 'vuex'
  import TodoCreateForm from '@/components/todo/components/TodoCreateForm'

  export default {
    name: 'todo-screen',
    components: { TodoCreateForm },
    store: TodoStore,
    computed: {
      ...mapGetters(['todos'])
    },

    created () {
      this.fetchTodo()
    },

    methods: {
      ...mapActions(['fetchTodo', 'createTodo', 'updateTodo'])
    }
  }
</script>

<style scoped>

</style>
