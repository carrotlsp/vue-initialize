<template>
  <div class="header">
    <div class="iconfont icon-icon_left left"></div>
    <div class="mid">
      <div class="iconfont icon-icon_search"></div>
      <div>输入城市/景点/游玩主题</div>
    </div>
    <div @click="handleCityClick" class="right">
      <div>{{currentCity}}</div>
      <div class="iconfont icon-triangle-down"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['currentCity','other'])
  },
  methods: {
    handleCityClick() {
      this.$router.push("/city");
    }
  }
};
</script>
<style lang="stylus" scoped>
.header
  background-color $themeColor
  height 44px
  overflow hidden
  display flex
  align-items center
  color #fff
  font-size 14px
  .left
    font-size 18px
    margin 0 10px
  .mid
    background-color #fff
    flex-grow 1
    height 30px
    margin 7px 0px
    border-radius 3px
    display flex
    align-items center
    color #e4e7ea
    padding-left 8px
  .right
    padding 0 7px
    display flex
    justify-content center
    align-items center
</style>
