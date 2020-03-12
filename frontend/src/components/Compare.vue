<template>
  <div class="main">
    <div class="teams-div">
      <select class="input" v-model="selectA" :teamA="teamA">
        {{ team }}
        <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
      </select>

      <select class="input" v-model="selectB" :teamB="teamB">
        <option v-for="stat in stats" :key="stat.id">{{stat.name}}</option>
      </select>
    </div>

    <div class="compare-div">
      <input
        @click="$router.push('/results')"
        type="button"
        class="button-compare"
        value="Compare Teams"
      />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Compare",
  created() {
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.stats = result.teams;
      });
  },
  data() {
    return {
      selectA: null,
      selectB: null,
      stats: null,
      teamA: null,
      teamB: null
    };
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
  margin-top: 170px;
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
  width: 100%;
  background: #fff;
  color: #000;
  border-bottom: solid 4px #455a64;
  border-radius: 3px;
}
</style>