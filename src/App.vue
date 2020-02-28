<template>
  <div id="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
      <div class="logo">
        <img src="logo.png" alt="Logo" />
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
            <router-link to="/" class="nav-link">Compare teams</router-link>
            <span class="sr-only">(current)</span>
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
    <!-- 
    <button onclick="topFunction()" id="myBtn" title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>-->

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p
              class="text-justify"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut id corporis pariatur ipsum magni quos expedita dolore, cupiditate delectus sit labore dolor est eveniet distinctio nesciunt perferendis, magnam quibusdam.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Our Team</h6>
            <ul class="links">
              <li>
                <a href="#">Anuraj</a>
              </li>
              <li>
                <a href="#">Enes</a>
              </li>
              <li>
                <a href="#">Eliza</a>
              </li>
              <li>
                <a href="#">Elin</a>
              </li>
              <li>
                <a href="#">Johan</a>
              </li>
              <li>
                <a href="#">Tilda</a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <img src="logo.png" alt="Football" />
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 Football Comparison</p>
          </div>
        </div>
      </div>
    </footer>
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
  width: 200px;
  height: 200px;
}

.navbar-nav {
  margin-left: 250px;
}

.nav-item {
  margin-right: 10px;
}

.site-footer {
  background-color: #e83e8c;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
}

.site-footer hr {
  border-top-color: #fff;
  opacity: 0.5;
}

.site-footer hr.small {
  margin: 20px 0;
}

.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.site-footer a {
  color: #fff;
}

.site-footer a:hover {
  color: #000;
  text-decoration: none;
}

.links {
  padding-left: 0;
  list-style: none;
}

.links li {
  display: block;
}

.links a {
  color: #fff;
}

.links a:active,
.links a:focus,
.links a:hover {
  color: #000;
  text-decoration: none;
}

.links.inline li {
  display: inline-block;
}

.site-footer .copyright-text {
  margin: 0;
}

@media (max-width: 767px) {
  .site-footer .copyright-text {
    text-align: center;
  }
}
</style>
