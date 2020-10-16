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
  </div>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style lang="stylus">
  .app-header {
    display flex
    align-items center
    border-bottom 1px solid rgba(0, 0, 0, 0.1);
    padding 0 20px
    height 60px

    &__menu-link {
      color: #959CA7
      margin-right 16px
      text-decoration none
      font-size 14px

      &:hover {
        text-decoration underline
      }
    }
  }
</style>
