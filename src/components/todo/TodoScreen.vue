<template>
  <div :class="b()">
    <div :class="b('container')">
      <todo-create-form :class="b('form')"/>
      <todo-list :class="b('list','scroll-shadows')"/>
      <load-mask v-if="loading"/>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TodoCreateForm from '@/components/todo/components/TodoCreateForm'
  import TodoList from '@/components/todo/components/TodoList'
  import TodoStore from './store/todo-store'
  import LoadMask from '@/components/common/load-mask/LoadMask'

  export default {
    name: 'todo-screen',
    components: { LoadMask, TodoList, TodoCreateForm },
    store: TodoStore,
    computed: {
      ...mapGetters(['loading'])
    },
    created () {
      this.fetchTodos()
    },
    methods: {
      ...mapActions(['fetchTodos', 'createTodo', 'updateTodo'])
    }
  }
</script>

<style lang="stylus">
  @import "~@/theme/variables.styl"
  .todo-screen {
    display flex
    justify-content center
    align-items flex-start
    height: 100%;
    padding 16px

    &__container {
      position relative
      display flex;
      flex-direction column
      width 900px
      background-color #fff
      border-radius 5px
      border 1px solid $borderColor
      max-height calc(100% - 32px)
    }

    &__form {
      border-bottom 1px solid $borderColor
      max-height 84px
      height 84px
    }

    &__list {
      max-height calc(100% - 84px)
      overflow auto
    }
  }
</style>
