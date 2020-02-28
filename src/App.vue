<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
      <div class="logo">
        <h2>Logo</h2>
      </div>

      <span class="navbar-brand"></span>
      <!--För att hamburger-menyn ska hamna till höger vid mindre skärm-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/compare-teams">Compare teams</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Compare players</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />

    <!-- <button onclick="topFunction()" id="myBtn" title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>-->
  </div>
</template>

<script>
//import Compare from "./components/Compare.vue";
// import headercontent from "./components/headercontent.vue";
// import News from "./views/Home.vue";

export default {
  name: "App",
  components: {
    //Compare
    // headercontent,
    // News
  }
};
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 80px;
  width: 130px;
  height: 100px;
  background-color: darkgrey;
}

.navbar-nav {
  margin-left: 250px;
}

.nav-item {
  margin-right: 10px;
}
</style>
