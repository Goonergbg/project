<template>
  <div id="app">
    <headercontent class="headercontainer" />
    <News class="newstitle" />
    <Contact />
  </div>
</template>


<script>
import headercontent from "../components/headercontent.vue";
import News from "../components/News.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  components: {
    headercontent,
    News,
    Contact
  }
};
</script>

<style></style>