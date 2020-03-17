<template>
  <div class="main">
    <h3>Pick players</h3>
    <div class="teams-div">
      <select class="input" v-model="selectA" :playerA="playerA">
        <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
      </select>

      <select class="input" v-model="selectB" :playerB="playerB">
        <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
      </select>
    </div>

    
    <div class="compare-div">
      <input @click="compare" type="button" class="button-compare" value="Compare Players" />
    </div>
    <resultPlayers v-if="playerA !== null && playerB !== null" :playerA="playerA" :playerB="playerB"></resultPlayers>
    <router-view></router-view>
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

.input {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 20px;
  width: 30%;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border-bottom: solid 4px #455a64;
  border-radius: 3px;
}

.button-compare {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  padding: 0 10px;
  width: 65%;
  background: #fff;
  color: #000;
  border-bottom: solid 4px #455a64;
  border-radius: 3px;
  font-family: "Fira Sans", sans-serif;
}
</style>

