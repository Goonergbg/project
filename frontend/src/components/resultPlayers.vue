<template>
  <div class="mainContainer">
    <div class="table-left">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">{{playerA.name}}</th>
            <th scope="col">
              <img :src="playerA.url" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Player-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>World ranking:</td>
            <td>
              <strong>{{playerA.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Apps:</td>
            <td>{{playerA.apps}}</td>
          </tr>
          <tr>
            <td>Goals:</td>
            <td>{{playerA.goals}}</td>
          </tr>
          <tr>
            <td>Yellow cards:</td>
            <td>{{playerA.yellow_cards}}</td>
          </tr>
          <tr>
            <td>Red cards:</td>
            <td>{{playerA.red_cards}}</td>
          </tr>
          <tr>
            <td>Minutes played:</td>
            <td>{{playerA.minutes_played}}</td>
          </tr>
          <tr>
            <td>Club:</td>
            <td>{{playerA.club}}</td>
          </tr>
          <tr>
            <td>Nationality:</td>
            <td>{{playerA.nationality}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-right">
            <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">{{playerB.name}}</th>
            <th scope="col">
              <img :src="playerB.url" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Player-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>World ranking:</td>
            <td>
              <strong>{{playerB.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Apps:</td>
            <td>{{playerB.apps}}</td>
          </tr>
          <tr>
            <td>Goals:</td>
            <td>{{playerB.goals}}</td>
          </tr>
          <tr>
            <td>Yellow cards:</td>
            <td>{{playerB.yellow_cards}}</td>
          </tr>
          <tr>
            <td>Red cards:</td>
            <td>{{playerB.red_cards}}</td>
          </tr>
          <tr>
            <td>Minutes played:</td>
            <td>{{playerB.minutes_played}}</td>
          </tr>
          <tr>
            <td>Club:</td>
            <td>{{playerB.club}}</td>
          </tr>
          <tr>
            <td>Nationality:</td>
            <td>{{playerB.nationality}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

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

@media (max-width: 767px) {
  .mainContainer {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.089);
}
.table-left {
  width: 90%;
  padding-left: 10px;
}

.table-right {
  width: 90%;
  padding-left: 10px;
}
}
</style>

<script>
export default {
  name: "resultPlayers",
  props: {
    playerA: Object,
    playerB: Object
  }
}
</script>



