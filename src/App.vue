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
  import AppHeader from '@/components/viewport/AppHeader'

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
      font-family Helvetica
      box-sizing: border-box;
    }
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction column

    &__main {
      flex: 1
      height 500px
      background-color #F4F5F9
    }
  }

  .scroll-shadows {
    background: /* Shadow covers */ linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */ radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0)) 0 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
    background-attachment: local, local, scroll, scroll;
  }
</style>
