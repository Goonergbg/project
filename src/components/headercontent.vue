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
        <button
          class="h-20 w-64 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
        >Button</button>
      </div>

      <div id="big-button2">
        <button
          class="h-20 w-64 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
        >Button</button>
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
  margin-left: 15%;
  padding-top: 5%;
}

#big-button2 {
  height: 65px;
  margin-left: 55%;
}

header {
  /* background-image: url("greyback.jpg"); */
  height: 650px;
}

.container {
  width: 50%;
}

.headercontainer {
  padding-top: 100px;
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