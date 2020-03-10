<template>
  <div id="app">
    <headercontent class="headercontainer" />
    <News class="newstitle" />
  </div>
</template>


<script>
import headercontent from "../components/headercontent.vue";
import News from "../components/News.vue";

export default {
  name: "Home",
  components: {
    headercontent,
    News
  }
};
</script>

<style></style>