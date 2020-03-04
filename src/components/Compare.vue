<template>
  <div class="main">
    <div class="teams-div">
      <select class="input">
        <option value="ManUtd">Manchester United</option>
      </select>
      <select class="input">
        <option value="Chelsea">Chelsea</option>
      </select>
    </div>

    <div class="compare-div">
      <router-link to="/results">
        <input type="button" class="button-compare" value="Jämför Lagen" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compare"
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
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
  border-bottom: solid 4px #e83e8c;
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
  border-bottom: solid 4px #e83e8c;
  border-radius: 3px;
}
</style>