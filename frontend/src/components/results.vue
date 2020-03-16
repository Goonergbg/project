<template>
  <div class="mainContainer">
    <div class="table-left">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">{{teamA.name}}</th>
            <th scope="col">
              <img :src="teamA.url" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Team-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>World ranking:</td>
            <td>
              <strong>{{teamA.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Stadium:</td>
            <td>{{teamA.stadium}}</td>
          </tr>
          <tr>
            <td>Founded:</td>
            <td>{{teamA.found}}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{{teamA.country}}</td>
          </tr>
          <tr>
            <td>League titles:</td>
            <td>{{teamA.league_titles}}</td>
          </tr>
          <tr>
            <td>CL titles:</td>
            <td>{{teamA.cl_titles}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{teamA.biggest_win}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{teamA.biggest_loss}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-right">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">{{teamB.name}}</th>
            <th scope="col">
              <img :src="teamB.url" />
            </th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Team-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>World ranking:</td>
            <td>
              <strong>{{teamB.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Stadium:</td>
            <td>{{teamB.stadium}}</td>
          </tr>
          <tr>
            <td>Founded:</td>
            <td>{{teamB.found}}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{{teamB.country}}</td>
          </tr>
          <tr>
            <td>League titles:</td>
            <td>{{teamB.league_titles}}</td>
          </tr>
          <tr>
            <td>CL titles:</td>
            <td>{{teamB.cl_titles}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{teamB.biggest_win}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{teamB.biggest_loss}}</td>
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
</style>

<script>
export default {
  name: "results",
  // data() {
  //   return {
  //     stats: null
  //   };
  // },
  props: {
    teamA: Object,
    teamB: Object
  }
};
</script>
