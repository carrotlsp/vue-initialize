<template>
  <div>
    <div  v-for="item in tickets" :key="item.id" >
      <div class="placeholder-div b-1px-b">
        <div>--</div>
        <div class="iconfont icon-icon_ding"></div>
        <div>{{item.title}}</div>
      </div>
      <div v-if="item.child.length" class="child-class">
        <detail-item :tickets="item.child"></detail-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  props: ["tickets"]
};
</script>

<style lang="stylus" scoped>
.placeholder-div
  height 40px
  padding-left 10px
  display flex
  color $themeColor
  align-items center
.child-class
  padding-left 40px;
</style>
