<template>
  <div :class="b({ error: hasErrors })">
    <el-input v-model="text"
              v-bind="$attrs"
              v-on="$listeners"
              :class="b('input')"
              @input="$v.$touch"/>
    <div v-if="hasErrors"
         :class="b('hint')">
      {{ currentError }}
    </div>
  </div>
</template>

<script>
  import { Input } from 'element-ui'

  export default {
    name: 'text-input',
    props: {
      value: {
        type: String,
        default: () => ''
      },

      validations: {
        type: Object,
        default: () => null
      }
    },
    components: {
      ElInput: Input
    },
    computed: {
      text: {
        get () {
          return this.value
        },
        set (text) {
          this.$emit('input', text)
        }
      },
      hasErrors () {
        return this.$v.text.$dirty && this.$v.$invalid
      },

      currentError () {
        if (this.hasErrors) {
          return this.vErrors.text?.[0]
        }
        return ''
      }
    },

    methods: {
      reset () {
        this.text = ''
        this.$v.$reset()
      }
    },

    validations () {
      if (this.validations) {
        return {
          text: {
            ...this.validations
          }
        }
      }
      return null
    }
  }
</script>

<style lang="stylus">
  $errorColor = #d32f2f

  .text-input {
    &--error &__input .el-input__inner {
      border-color $errorColor
    }

    &--error &__hint {
      color $errorColor
    }

    &__hint {
      padding 4px 0
      font-size 12px
    }
  }
</style>
