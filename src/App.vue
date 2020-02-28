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

    <button onclick="topFunction()" id="myBtn" title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>
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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
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
  background-color: rgba(211, 211, 211, 0.5);
  /* Set a background color */
  color: white;
  /* Text color */
  cursor: pointer;
  /* Add a mouse pointer on hover */
  padding: 0;
  /* Some padding */
  border-radius: 50%;
  /* Rounded corners */
  font-size: 18px;
  /* Increase font size */
}

#myBtn:hover {
  background-color: rgba(169, 169, 169, 0.5);
  /* Add a dark-grey background on hover */
}

.fas {
  padding: 15px;
}
</style>
