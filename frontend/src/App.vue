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
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/compare-teams" class="nav-link">Compare teams</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/comparePlayers" class="nav-link">Compare players</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link">Forum</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Log in</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/logout" class="nav-link" @click="logout">Log out</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />

    <button @click="topFunction" title="Go to top" :style="display" class="myBtn">
      <i class="fas fa-arrow-up"></i>
    </button>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p
              class="text-justify"
            >Our company started in February 2020 and have ever since then been comparing football-teams. Visitors, You're Welcome!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Our Team</h6>
            <ul class="links">
              <li>
                <a href="https://www.linkedin.com/in/anuraj-sandhu-44539787/" target="_blank">Anuraj</a>
              </li>
              <li>
                <a href="https://se.linkedin.com/in/enes-gashi-5082b9132" target="_blank">Enes</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eliza-albert-8a13b319b" target="_blank">Eliza</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/elin-alsterbo/" target="_blank">Elin</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johan-%C3%B6stby-0650781a3/"
                  target="_blank"
                >Johan</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tilda-sandqvist-8b6224129/"
                  target="_blank"
                >Tilda</a>
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
// import headercontent from "./components/headercontent.vue";
// import News from "./views/Home.vue";

export default {
  name: "App",
  components: {
    // headercontent,
    // News
  },

  data() {
    return {
      display: "display: none"
    };
  },

  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.display = "display: block";
      } else {
        this.display = "display: none";
      }
    },
    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    logout() {
      fetch("http://localhost:3000/logout/", {
        method: "DELETE"
          .then(response => response.json())
          .then(() => this.$router.push("/"))
      });
    }
  },

  created() {
    window.addEventListener("scroll", this.scrollFunction);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollFunction);
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

.navbar {
  background-color: #fff !important;
}

.navbar-nav {
  margin-left: 300px;
}

.nav-item {
  margin-right: 10px;
}

.myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgba(216, 216, 216, 0.5);
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 46px;
  border-radius: 50%;
  font-size: 18px;
}

.myBtn:hover {
  background-color: rgba(160, 160, 160, 0.5);
}

.site-footer {
  background-color: #455a64;
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
