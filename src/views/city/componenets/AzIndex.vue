<template>
  <div
    ref="wrapper"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    class="wrapper"
  >
    <div
      :ref="key"
      @click="handleClick(key)"
      v-for="(item, key) in cityList"
      :key="key"
      class="letter"
    >{{key}}</div>
  </div>
</template>
<script>
export default {
  props: {
    cityList: [Object, Array]
  },
  data() {
    return {
      aOffsetTop: 0
    };
  },
  computed: {
    letterArray() {
      let array = [];
      for (const key in this.cityList) {
        array.push(key);
      }
      return array;
    }
  },
  methods: {
    handleClick(key) {
      this.$emit("changeLetter", key);
    },
    handleTouchStart(e) {
      if (this.aOffsetTop === 0) {
        this.aOffsetTop = this.$refs["A"][0].offsetTop;
      }
    },
    handleTouchMove(event) {
      let touch = event.touches[0]; //获取第一个触点
      let index = Math.floor((touch.clientY - this.aOffsetTop) / 20);
      this.handleClick(this.letterArray[index]);

      // console.log(touch.clientY)
      // console.log(this.$refs['wrapper'].offsetTop)
      console.log("handleTouchMove");
    },
    handleTouchEnd(e) {
      console.log(e);
      console.log("handleTouchEnd");
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
  position absolute
  right 0
  top 0
  width 26px
  bottom 0
  display flex
  flex-direction column
  justify-content center
  align-items center
  color blue
  font-size 14px
  .letter
    height 20px
    line-height 20px
</style>
