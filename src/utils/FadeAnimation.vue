<template>
  <div>
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FadeAnimation"
};
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity 0
</style>

