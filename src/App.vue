<template>
  <div id="app"
       :class="b()">
    <app-header :class="b('header')"/>
    <div :class="b('main')">
      <router-view/>
    </div>
  </div>
</template>

<script>

  import AppHeader from '@/components/common/header/AppHeader'

  export default {
    name: 'app',
    components: { AppHeader }
  }
</script>
<style lang="stylus">
  html, body {
    height: 100%;
    width: 100%;

    * {
      font-family: 'Open Sans', sans-serif;
    }
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction column

    &__main {
      flex: 1
      background-color #F4F5F9
    }
  }
</style>
