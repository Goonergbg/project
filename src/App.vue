<template>
  <div id="app">
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

    <headercontent class="headercontainer" />
    <Compare />

    <i onclick="topFunction()" id="myBtn" title="Go to top" class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
import Compare from "./components/Compare.vue";
import headercontent from "./components/headercontent.vue";
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

#myBtn {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Fixed/sticky position */
  bottom: 20px;
  /* Place the button at the bottom of the page */
  right: 30px;
  /* Place the button 30px from the right */
  z-index: 99;
  /* Make sure it does not overlap */
  border: none;
  /* Remove borders */
  outline: none;
  /* Remove outline */
  background-color: lightgrey;
  /* Set a background color */
  color: white;
  /* Text color */
  cursor: pointer;
  /* Add a mouse pointer on hover */
  padding: 10px;
  /* Some padding */
  border-radius: 10px;
  /* Rounded corners */
  font-size: 18px;
  /* Increase font size */
}

#myBtn:hover {
  background-color: #555;
  /* Add a dark-grey background on hover */
}
</style>
