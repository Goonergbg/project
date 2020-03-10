<template>
  <header>
    <div class="headercontainer">
      <div class="container mx-auto">
        <h1 class="headerrubrik">Compare Football Teams and Players</h1>

        <p
          class="headercontent"
        >We offer the abilty to compare Football teams and players, our website delivers information such as World Ranking, Stadium, Player Goals, Minutes Played, Goals per Match etc...</p>
      </div>
    </div>

    <div class="md:flex md:px-32">
      <div id="big-button1" class="w-full md:pl-64">
        <router-link to="/compare-teams">
          <button
            class="h-16 w-64 md:h-20 text-white font-bold py-2 px-4 rounded-full"
          >Compare Teams</button>
        </router-link>
      </div>

      <div id="big-button2 " class="w-full md:pr-64">
        <router-link to="/comparePlayers">
          <button
            class="h-16 w-64 md:h-20 text-white font-bold py-2 px-4 rounded-full"
            id="knappstorlek"
          >Compare Players</button>
        </router-link>
      </div>
    </div>
  </header>
</template>


<style scoped>
.headerpicure {
  width: 100%;
  height: 600px;
}

.headerrubrik {
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-weight: 800;
  padding-bottom: 30px;
  font-family: "Chakra Petch", sans-serif;
}

.headercontent {
  font-size: 20px;
  font-weight: 600;
  color: rgb(236, 229, 229);
}

button {
  background-color: #ff9900;
  font-family: "Fira Sans", sans-serif;
}

button:hover {
  background-color: #455a64;
}

#big-button1 {
  font-size: 22px;
  padding-bottom: 16px;
}

#knappstorlek {
  font-size: 22px;
}

header {
  background-image: url("/arena2.jpg");
  background-color: grey;
  height: 650px;
}

.container {
  width: 50%;
}

.headercontainer {
  padding-top: 60px;
  margin-bottom: 30px;
  text-align: center;
}

@media (max-width: 768px) {
  .headercontent {
    font-size: 16px;
    width: 100%;
  }

  .container {
    width: 100%;
  }

  .headerrubrik {
    font-size: 30px;
  }
}
</style>

<script>
export default {
  name: "headercontent",
  props: {
    meddelande: String
  }
};
</script>