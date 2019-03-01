<template>
  <div>
    <div>动态路由=>动态参数:{{id}}</div>
    <home-banner></home-banner>
    <detail-item :tickets="tickets"></detail-item>
  </div>
</template>

<script>
import HomeBanner from "../home/components/HomeBanner";
import DetailItem from "./components/DetailItem";

export default {
  name:'Detail',
  components: {
    HomeBanner,
    DetailItem
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
</style>


