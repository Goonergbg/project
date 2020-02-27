<template>
  <div id="app">
    Hej
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <News class="newstitle" />
    </div>
    <router-view />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logo">
        <h2>Logo</h2>
      </div>

      <span id="logo" class="navbar-brand"></span>
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
            <a class="nav-link" href="#">Compare teams</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Compare players</a>
          </li>
        </ul>
      </div>
    </nav>

    <Compare />

    <headercontent class="headercontainer" />
  </div>
</template>

<script>
import Compare from "./components/Compare.vue";
import headercontent from "./components/header.vue";

import News from "./components/News.vue";

export default {
  name: "App",
  components: {
    Compare,
    headercontent,
    News
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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

.navbar {
  position: sticky;
  top: 0;
}

.navbar-nav {
  margin-left: 250px;
}
</style>
