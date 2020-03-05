<template>
  <div class="mainContainer">
    <div class="table-left">
      <table class="table table-striped" v-for="player in players" :key="player.id">
        <thead>
          <tr>
            <th class="heading" scope="col">{{player.name}}</th>
            <th scope="col">
              <img src="marcus.png" alt="Logo" class="playerpicure" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Player-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goals:</td>
            <td>{{player.goals}}</td>
          </tr>
          <tr>
            <td>Yellow cards:</td>
            <td>{{player.yellowCards}}</td>
          </tr>
          <tr>
            <td>Red cards:</td>
            <td>{{player.redCards}}</td>
          </tr>
          <tr>
            <td>Minutes played:</td>
            <td>{{player.minutesPlayed}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-right">
      <table class="table table-striped" v-for="player in players2" :key="player.id">
        <thead>
          <tr>
            <th class="heading" scope="col">{{player.name}}</th>
            <th scope="col">
              <img src="olivier.png" alt="Logo" class="playerpicure" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Player-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goals :</td>
            <td>{{player.goals}}</td>
          </tr>
          <tr>
            <td>Yellow cards:</td>
            <td>{{player.yellowCards}}</td>
          </tr>
          <tr>
            <td>Red cards:</td>
            <td>{{player.redCards}}</td>
          </tr>
          <tr>
            <td>Minutes played:</td>
            <td>{{player.minutesPlayed}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 600px;
  margin: 40px auto;
  padding: 10px;
  box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.089);
}

.table-left {
  width: 50%;
  justify-content: left;
  margin-right: 150px;
}

.table-right {
  width: 50%;
  justify-content: right;
}

.heading {
  font-size: 19px;
}

thead th {
  border-top: none;
}

.playerpicure {
  height: 140px;
}
</style>

<script>
export default {
  name: "resultPlayers",
  created() {
    fetch("/data.json", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        (this.players = result[3]), (this.players2 = result[4]);
      });
  },
  data() {
    return {
      players: null,
      players2: null
    };
  }
};
</script>



