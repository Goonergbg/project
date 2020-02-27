<template>
  <div id="app">
    <Compare />

    <headercontent class="headercontainer" />
  </div>
</template>

<script>
import Compare from "./components/Compare.vue";
import headercontent from "./components/header.vue";

export default {
  name: "App",
  components: {
    Compare,
    headercontent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
