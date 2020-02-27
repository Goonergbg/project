<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-8">
          <img src="assets/logo.png" />Column
        </div>
        <div class="col">Column</div>
        <div class="w-100"></div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.container {
  border: groove red;
}
.col {
  background-color: green;
  height: 20em; /* GÖR DENNA TILL AUTO SEN */
  padding: 1em;
  grid-gap: 5em;
  border: groove white;
}
</style>