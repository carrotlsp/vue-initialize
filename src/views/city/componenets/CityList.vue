<template>
  <div ref="wrapper" class="city-list wrapper">
    <ul>
      <div v-for="(item,key) in cityList" :key="key">
        <div class="letter">{{key}}</div>
        <div v-for="city in item" :key="city.id" class="city b-1px-b">{{city.name}}</div>
      </div>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: {
    cityList: [Object, Array]
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper);
      console.log(this.scroll);
    });
  },
  updated() {}
};
</script>
<style lang="stylus" scoped>
.city-list
  position absolute
  top 44px
  left 0
  bottom 0
  right 0
  overflow hidden
  background-color #f5f5f5
  font-size 12px
  color #212121
  .letter
    padding 12px 15px
  .city
    font-size 14px
    height 44px
    padding-left 15px
    background-color white
    line-height 44px
</style>
