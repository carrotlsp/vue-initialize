<template>
  <div>
    <detail-header :detailID="id"></detail-header>
    <div  @click="handleImageClick">
      <img
        class="top-img"
        src="http://img1.qunarzz.com/sight/p0/1603/8b/8b12625615da783c90.water.jpg_600x330_23838293.jpg"
        alt
      >
    </div>
    <detail-item :tickets="tickets"></detail-item>
    <fade-animation>
    <detail-images v-show="showImage" @click.native="handleImageClick"></detail-images>
    </fade-animation>
  </div>
</template>

<script>
import DetailItem from "./components/DetailItem";
import DetailHeader from "./components/DetailHeader";
import DetailImages from "./components/DetailImages";
import FadeAnimation from '../../utils/FadeAnimation'

export default {
  name: "Detail",
  components: {
    DetailItem,
    DetailHeader,
    DetailImages,
    FadeAnimation
  },
  props: ["id"],
  data() {
    return {
      tickets: [],
      showImage: false
    };
  },
  activated() {
    this.$get("/static/detail.json").then(response => {
      this.tickets = response;
      console.log("这里的数据每次进来可以对比 ID 来决定是否重新加载");
    });
  },
  methods: {
    handleImageClick() {
      this.showImage = !this.showImage;
    }
  }
};
</script>

<style lang="stylus" scoped>
.top-img
  height 205
  width 100%
</style>


