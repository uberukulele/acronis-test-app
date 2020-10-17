<template>
  <div :class="b()">
    <el-checkbox :value="todo.done"
                 @input="toggleTodoDone"/>
    <span :class="b('text')"
          :title="todo.text">{{ todo.text }}</span>
    <el-tooltip :content="$t('todos.delete-tooltip')"
                effect="dark"
                placement="bottom-start">
      <i :class="b('remove-icon','el-icon-close')"
         @click="maybeDeleteTodo"/>
    </el-tooltip>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { Checkbox, Tooltip } from 'element-ui'

  export default {
    name: 'todo-list-item',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    components: {
      ElCheckbox: Checkbox,
      ElTooltip: Tooltip
    },
    methods: {
      ...mapActions(['updateTodo', 'deleteTodo']),
      toggleTodoDone (done) {
        this.updateTodo({
          ...this.todo,
          done
        })
      },

      async maybeDeleteTodo () {
        try {
          await this.$confirm(this.$t('todos.delete-todo-q'),
              this.$t('common.confirm-title'), {
                confirmButtonText: this.$t('common.buttons.delete'),
                cancelButtonText: this.$t('common.buttons.cancel'),
                type: 'warning'
              })
          await this.deleteTodo(this.todo.id)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/theme/variables.styl"

  .todo-list-item {
    display flex
    align-items center
    height 52px
    padding 0 20px
    border-bottom 1px solid $borderColor

    &__text {
      flex 1
      padding-left 20px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      font-size 14px
      color $textColor
    }

    &__remove-icon {
      display none
      padding 6px
      cursor pointer
      margin-right -6px
      font-size 18px
      color $primary
    }

    &:hover {
      background-color rgba($primary, 0.1)
    }

    &:hover &__remove-icon {
      display block
    }
  }
</style>
