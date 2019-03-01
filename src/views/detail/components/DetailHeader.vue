<template>
  <div>
    <div class="header-back" v-show="show" ref="headerBack">
      <div @click="handleBackClick" class="top-back-icon">
        <div class="top-back-bg"></div>
        <div class="iconfont icon-icon_left"></div>
      </div>
    </div>
    <div class="header-nav" v-show="!show" ref="headerNav">
      <div @click="handleBackClick" class="iconfont icon-icon_left left"></div>
      <div class="mid">动态路由参数:{{detailID}}</div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  props: ["detailID"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleBackClick() {
      // this.$router.push("/");
      this.$router.go(-1);
    },
    handleScroll() {
      // console.log(window.scrollY);
      let scrollY = window.scrollY;
      if (scrollY > 20) {
        let opacityValue = scrollY / 180;
        opacityValue = opacityValue > 1 ? 1 : opacityValue;
        let obj = this.$refs.headerNav;
        obj.style.opacity = opacityValue;
        console.log(opacityValue);
        this.show = false;
      } else {
        this.show = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated(){
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
.header-nav
  height 44px
  position fixed
  left 0
  top 0
  right 0
  z-index 2
  background-color $themeColor
  display flex
  align-items center
  color #fff
  font-size 14px
  .left
    font-size 18px
    margin 0 10px
  .mid
    flex-grow 1
    height 30px
    line-height 30px
    text-align center
    margin 7px 0px
    font-size 16px
  .right
    width 38px
  height 44px
  position fixed
  left 0
  top 0
  right 0
  z-index 2
  .top-back-icon
    position relative
    margin-top 4px
    margin-left 4px
    height 36px
    width 36px
    color #ffffff
    text-align center
    .top-back-bg
      background-color black
      height 36px
      width 36px
      opacity 0.5
      border-radius 18px
    .icon-icon_left
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      font-size 18px
      line-height 36px

.header-back
  height 44px
  position fixed
  left 0
  top 0
  right 0
  z-index 2
  .top-back-icon
    position relative
    margin-top 4px
    margin-left 4px
    height 36px
    width 36px
    color #ffffff
    text-align center
    .top-back-bg
      background-color black
      height 36px
      width 36px
      opacity 0.5
      border-radius 18px
    .icon-icon_left
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      font-size 18px
      line-height 36px

</style>

