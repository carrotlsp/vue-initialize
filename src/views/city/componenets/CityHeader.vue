<template>
  <div class="header">
    <div @click="handleBackClick" class="iconfont icon-icon_left left"></div>
    <div class="mid">城市选择</div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  methods:{
    handleBackClick(){
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>
.header
  height 44px
  background-color $themeColor
  color white
  font-size 16px
  display flex
  align-items center
  .left
  .right
    font-size 18px
    width 42px
    height 100%
    line-height 44px
    text-align center
  .mid
    flex-grow 1
    font-weight 500
    text-align center
    
</style>
