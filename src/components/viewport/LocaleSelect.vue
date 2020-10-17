<template>
  <el-select v-model="locale"
             placeholer="Language">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  import { setLocalData } from '@/utils'
  import { Select, Option } from 'element-ui'

  export default {
    name: 'locale-select',
    components: {
      ElSelect: Select,
      ElOption: Option
    },
    data () {
      return {
        options: [{
          value: 'ru',
          label: 'Русский'
        }, {
          value: 'en',
          label: 'English'
        }]
      }
    },
    computed: {
      locale: {
        get () {
          return this.$i18n.locale
        },
        set (locale) {
          setLocalData('locale', locale)
          window.location.reload()
        }
      }
    }
  }
</script>
