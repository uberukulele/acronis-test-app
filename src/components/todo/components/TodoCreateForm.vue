<template>
  <div :class="b()">
    <text-input v-model="currentTodo.text"
                :placeholder="$t('todos.new-todo-input-placeholder')"
                :validations="validations"
                type="textarea"
                autosize
    />
    <el-button type="primary"
               @click="maybeCreateTodo">{{ $t('todos.new-todo-button') }}
    </el-button>
  </div>
</template>

<script>
  import { Button } from 'element-ui'
  import TextInput from '@/components/common/input/TextInput'
  import { required, maxLength } from 'vuelidate/lib/validators'

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

    methods: {
      maybeCreateTodo () {

      }
    }
  }
</script>

<style scoped>

</style>
