<template>
  <div id="app">
    <News class="newstitle" />
    <headercontent class="headercontainer" />
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