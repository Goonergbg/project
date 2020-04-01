<template>
  <div>
    <div class="main">
      <h3>Pick players</h3>
      <div class="teams-div">
        <select v-model="selectA" :playerA="playerA">
          <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
        </select>

        <select v-model="selectB" :playerB="playerB">
          <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
        </select>
      </div>

      <div class="compare-div">
        <input @click="compare" type="button" class="button-compare" value="Compare Players" />
      </div>
      <resultPlayers
        v-if="playerA !== null && playerB !== null"
        :playerA="playerA"
        :playerB="playerB"
      ></resultPlayers>
      <router-view></router-view>
    </div>

    <!---- Reklam ----->
    <!-- v-if="!this.$state.token" -->

    <div class="container" v-if="!$store.state.token">
      <div class="row">
        <div class="col">
          <a href="https://www.pepsi.se/">
            <img src="pepsi.jpg" alt="Logo" class="reklambild" />
          </a>
        </div>
        <div class="col">
          <a href="https://www.zalando.se/">
            <img src="zalando.png" alt="Logo" class="reklambild" />
          </a>
        </div>
        <div class="w-100"></div>
        <div class="col" id="reklamtext">
          Släck törsten med Sveriges
          <span style="color:#FF0000">godaste dryck.</span>
        </div>
        <div class="col" id="reklamtext">
          <span style="color:#FF0000">MID SEASON SALE:</span> Spara upp till 50% hos Zalando.
        </div>
      </div>
    </div>
    <!---- Reklam slut ----->
  </div>
</template>

<script>
import resultPlayers from "./resultPlayers.vue";

export default {
  name: "comparePlayers",
  created() {
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(result => {
        this.stats = result.players;
      });
  },
  components: {
    resultPlayers
  },
  data() {
    return {
      selectA: null,
      selectB: null,
      stats: null,
      playerA: null,
      playerB: null
    };
  },
  methods: {
    compare() {
      this.playerA = this.stats.find(stat => stat.name === this.selectA);
      this.playerB = this.stats.find(stat => stat.name === this.selectB);
    }
  }
};
</script>


<style scoped>
.container {
  margin-top: 50px;
}

#reklamtext {
  font-size: 18px;
  text-align: center;
  padding-bottom: 60px;
  font-family: "Fira Sans", sans-serif;
  font-weight: bold;
}

.reklambild {
  height: 300px;
  margin-left: 10px;
}

.main {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-top: 100px;
  font-family: "Fira Sans", sans-serif;
}

.teams-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
}

.compare-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin-bottom: 30px;
}

select::-ms-expand {
  display: none;
}

select {
  font-size: 20px;
  height: 40px;
  margin: 20px;
  width: 30%;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-bottom: solid 3px #455a64;
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
}

.button-compare {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  padding: 0 10px;
  width: 65%;
  background: #fff;
  color: #000;
  border-bottom: solid 3px #455a64;
  border-radius: 3px;
  font-family: "Fira Sans", sans-serif;
}
</style>

