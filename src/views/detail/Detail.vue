<template>
  <div>
    <detail-header :detailID="id"></detail-header>
    <div>
      <img class="top-img" src="http://img1.qunarzz.com/sight/p0/1603/8b/8b12625615da783c90.water.jpg_600x330_23838293.jpg" alt="">
    </div>
    <detail-item :tickets="tickets"></detail-item>
  </div>
</template>

<script>
import DetailItem from "./components/DetailItem";
import DetailHeader from "./components/DetailHeader";

export default {
  name:'Detail',
  components: {
    DetailItem,
    DetailHeader
  },
  props:['id'],
  data(){
    return{
      tickets:[]
    }
  },
  mounted(){
    this.$get('/static/detail.json').then(response=>{
      console.log(response);
      this.tickets = response;
    });
  }
}
</script>

<style lang="stylus" scoped>
.top-img
  height 205
  width 100%
</style>


