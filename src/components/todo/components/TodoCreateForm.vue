<template>
  <div :class="b()">
    <text-input v-model="currentTodo.text"
                :placeholder="$t('todos.new-todo-input-placeholder')"
                :validations="validations"
                :class="b('input')"
                type="text"
                ref="input"
                @keyup.native.enter="maybeCreateTodo"
    />
    <el-button :class="b('button')"
               type="primary"
               :disabled="!isValid"
               @click="maybeCreateTodo">{{ $t('todos.new-todo-button') }}
    </el-button>
  </div>
</template>

<script>
  import { Button } from 'element-ui'
  import TextInput from '@/components/common/input/TextInput'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import { mapActions } from 'vuex'
  import { showSuccess } from '@/notifications'

  export default {
    name: 'todo-create-form',
    components: {
      TextInput,
      ElButton: Button
    },
    data () {
      return {
        currentTodo: {
          text: ''
        },
        validations: {
          required,
          maxLength: maxLength(255)
        }
      }
    },

    computed: {
      isValid () {
        return !this.$v.$invalid
      }
    },

    validations () {
      return {
        currentTodo: {
          done: false,
          text: this.validations
        }
      }
    },

    methods: {
      ...mapActions(['createTodo']),
      async maybeCreateTodo () {
        if (this.isValid) {
          try {
            await this.createTodo(this.currentTodo)
            this.$refs.input.reset()
            showSuccess(this.$t('todos.success-msg'))
          } catch (e) {
            this.$showError(e)
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .todo-create-form {
    display flex
    align-items flex-start;
    padding 22px 20px

    &__input {
      flex: 1
      margin-right 16px
    }

  }
</style>
