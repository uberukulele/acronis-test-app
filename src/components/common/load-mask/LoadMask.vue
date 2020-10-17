<template>
  <div :class="b()"/>
</template>

<script>
  import { Loading } from 'element-ui'

  export default {
    name: 'load-mask',
    mounted () {
      this.loadingInstance = Loading.service({
        target: this.$el
      })
    },
    beforeDestroy () {
      this.loadingInstance.close()
    }
  }
</script>

<style>
  .load-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
