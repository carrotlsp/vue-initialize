<template>
  <div class="city">
    <city-header class="city-header"></city-header>
    <city-list class="city-list" :cityList="list"></city-list>
  
  </div>
</template>
<script>
import CityHeader from "./componenets/CityHeader";
import CityList from "./componenets/CityList";
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    CityHeader,
    CityList
  },
  mounted() {

    axios
      .get("/static/city.json")
      .then(response => {
        this.list = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  updated() {
    console.log("updated");
  }
};
</script>

<style lang="stylus" scoped>
.city
  .city-header
    height 44px
</style>
