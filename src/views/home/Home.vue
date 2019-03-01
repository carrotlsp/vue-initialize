<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <div @click="handleItemClick(item)" v-for="item in 9" :key="item" class="placeholder-div b-1px-b">{{doubleCity}}{{item}}</div>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeBanner from "./components/HomeBanner";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    HomeHeader,
    HomeBanner
  },
  computed: {
    ...mapGetters(["doubleCity"])
  },
  mounted() {
  },
  activated(){
    this.getIndexData();
  },
  methods: {
    // 换城市后首页得重新加载,怎么做呢?keep-alive 已经让这个不会重新执行了.activated就是解决这个问题的.
    async getIndexData(){
      this.$get('/static/index.json',{token:'123',header:'789'})
      .then(response => {
        console.log("这里的数据每次进来可以对比 city 来决定是否重新加载");
      }).catch(error => {
        console.log(error);
      });

      // axios
      // .get("/static/index.json")
      // .then(response => {
      //   console.log('首页数据加载');
      // })
      // .catch(error => {
      //   console.log(error);
      // });

    },
    handleItemClick(index){
      this.$router.push('/detail/'+index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.hello
  background $themeColor
  height 100px
  width 80%
.placeholder-div
  height 150px
  background-color yellow
</style>

