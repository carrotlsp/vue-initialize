<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="banner">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item">
        <img class="banner-img" :src="item" alt>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        autoHeight: true, //高度随内容变化
        autoplay: {
          disableOnInteraction: false
        },
        speed: 300,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        // effect: "coverflow",
        // slidesPerView: 3,
        // centeredSlides: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      list: [
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3d1d67ef5d935c05fa838f57633141e2.jpg_750x200_cdadafd4.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/4642f3d4ca2aaaa3c7c522f9eb86fdc7.jpg_750x200_5a390d78.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/3cdc880b14b7fc6f9c59e6f0f89b857d.jpg_750x200_f5a7ad47.jpg"
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="stylus" scoped>
.banner
  height 100px
  .swiper-pagination >>> .swiper-pagination-bullet
    background-color white
    opacity 0.4
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background-color white
    opacity 1
  .banner-img
    height 100px
    overflow hidden
</style>
