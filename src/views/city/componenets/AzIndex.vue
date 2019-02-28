<template>
  <div class="wrapper">
    <div @click="handleClick(key)" v-for="(item, key) in cityList" :key="key" class="letter">{{key}}</div>
  </div>
</template>
<script>
export default {
  props:{
    cityList:[Object,Array]
  },
  methods:{
    handleClick(key){
      this.$emit('changeLetter',key);
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
  .letter{
    height 20px
    line-height 20px
  }
</style>
