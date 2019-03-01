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
  activated(){
    this.$get('/static/detail.json').then(response=>{
      this.tickets = response;
      console.log("这里的数据每次进来可以对比 ID 来决定是否重新加载");
    });
  },
  
}
</script>

<style lang="stylus" scoped>
.top-img
  height 205
  width 100%
</style>


