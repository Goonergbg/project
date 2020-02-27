<template>
  <header>
    <div class="headercontainer">
      <div class="container mx-auto">
        <h1 class="headerrubrik">En rubrik</h1>

        <p class="headercontent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi magni,
          itaque,
          sequi eligendi architecto quisquam nemo molestias esse, sapiente dolores repell necessitatibus ducimus, ad
          eius
          sapiente omnis ratione minima quod ullam dolorem
          placeat. Aliquid dicta incidunt ab
        </p>
      </div>
    </div>

    <div class="container mx-auto">
      <div id="big-button1">
        <router-link to="/compare-players">
          <button
            class="h-20 w-64 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
          >Compare Players</button>
        </router-link>
      </div>

      <div id="big-button2">
        <router-link to="/compare-teams">
        <button
          class="h-20 w-64 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
        >Compare Teams</button>
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
  font-size: 40px;
  color: rgb(255, 255, 255);

  font-weight: 800;
  padding-bottom: 30px;
}

.headercontent {
  font-size: 18px;
  font-weight: 600;
  color: rgb(236, 229, 229);
}

#big-button1 {
  height: 40px;
  margin-right: 50%;
  padding-top: 5%;
  font-size: 22px;
}

#big-button2 {
  height: 40px;
  margin-left: 45%;
  font-size: 22px;
}

header {
  /* background-image: url("/.public/greyback.jpg"); */
  background-color: grey;
  height: 650px;
}

.container {
  width: 50%;
}

.headercontainer {
  padding-top: 60px;
  text-align: center;
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