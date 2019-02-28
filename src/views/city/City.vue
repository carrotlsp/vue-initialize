<template>
    <div class="city">
      <city-header class="city-header"></city-header>
      <city-list :letter="letter" class="city-list" :cityList="list"></city-list>
      <az-index :cityList="list" @changeLetter="handleChangeLetter"></az-index>
    </div>
</template>
<script>
import CityHeader from "./componenets/CityHeader";
import CityList from "./componenets/CityList";
import AzIndex from "./componenets/AzIndex";
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      letter: ""
    };
  },
  components: {
    CityHeader,
    CityList,
    AzIndex
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
  updated() {},
  methods: {
    handleChangeLetter(key) {
      this.letter = key;
    }
  }
};
</script>

<style lang="stylus" scoped>
.city
  .city-header
    height 44px
</style>
