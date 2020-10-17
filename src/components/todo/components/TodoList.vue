<template>
  <div :class="b()">
    <todo-list-item v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"/>
    <div v-if="!todos.length"
         :class="b('empty-list-text')">
      {{ $t('todos.empty-list') }}
      <el-link :class="b('refresh-link')"
               type="primary"
               @click="fetchTodos">{{ $t('todos.refresh') }}
      </el-link>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TodoListItem from '@/components/todo/components/TodoListItem'
  import { Link } from 'element-ui'


  export default {
    name: 'todo-list',
    components: { TodoListItem, ElLink: Link },
    computed: {
      ...mapGetters(['todos'])
    },
    methods: {
      ...mapActions(['fetchTodos'])
    }
  }
</script>

<style lang="stylus">
  @import "~@/theme/variables.styl"

  .todo-list {
    &__empty-list-text {
      display flex
      align-items center
      justify-content center
      height 52px
      color $textColorSecondary
      font-size 14px
    }

    &__refresh-link {
      margin 0 8px
    }
  }
</style>
