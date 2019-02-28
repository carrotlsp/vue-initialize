<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <div class="placeholder-div b-1px-b">{{doubleCity}}123</div>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeBanner from "./components/HomeBanner";
import { mapGetters } from "vuex";
export default {
  components: {
    HomeHeader,
    HomeBanner
  },
  computed: {
    ...mapGetters(['doubleCity'])
  },
  methods: {}
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

