<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
