<template>
  <div :class="b()">
    <router-link to="/about"
                 :class="b('menu-link')">
      {{ $t('common.menu.about-menu-item') }}
    </router-link>
    <router-link to="/todo"
                 :class="b('menu-link')">
      {{ $t('common.menu.todo-menu-item') }}
    </router-link>
    <div :class="b('spacer')"/>
    <locale-select :class="b('locale-select')"/>
  </div>
</template>

<script>
  import LocaleSelect from '@/components/viewport/LocaleSelect'

  export default {
    name: 'app-header',
    components: { LocaleSelect }
  }
</script>

<style lang="stylus">
  @import "~@/theme/variables.styl"

  .app-header {
    display flex
    align-items center
    border-bottom 1px solid $borderColor
    padding 0 20px
    height 60px

    &__menu-link {
      color: $textColorSecondary
      margin-right 16px
      text-decoration none
      font-size 14px

      &:hover {
        text-decoration underline
      }

      &.router-link-active {
        color: $primary
        text-decoration underline
      }
    }

    &__spacer {
      flex: 1
    }
  }
</style>
