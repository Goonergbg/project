<template>
  <div class="mainContainer">
    <div class="table-left">
      <table class="table table-striped" v-for="stat in stats" :key="stat.teams">
        <thead>
          <tr>
            <th class="heading" scope="col">{{stat.name}}</th>
            <th scope="col">
              <img :src="stat.url" width="100" height="100" />
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
              <strong>{{stat.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Stadium:</td>
            <td>{{stat.stadium}}</td>
          </tr>
          <tr>
            <td>Founded:</td>
            <td>{{stat.found}}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{{stat.country}}</td>
          </tr>
          <tr>
            <td>League titles:</td>
            <td>{{stat.league_titles}}</td>
          </tr>
          <tr>
            <td>CL titles:</td>
            <td>{{stat.cl_titles}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{stat.biggest_win}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{stat.biggest_loss}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-right">
      <table class="table table-striped" v-for="stat in stats" :key="stat.teams">
        <thead>
          <tr>
            <th class="heading" scope="col">{{stat.name}}</th>
            <th scope="col">
              <img :src="stat.url" width="100" height="100" />
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
              <strong>{{stat.ranking}}</strong>
            </td>
          </tr>
          <tr>
            <td>Stadium:</td>
            <td>{{stat.stadium}}</td>
          </tr>
          <tr>
            <td>Founded:</td>
            <td>{{stat.found}}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{{stat.country}}</td>
          </tr>
          <tr>
            <td>League titles:</td>
            <td>{{stat.league_titles}}</td>
          </tr>
          <tr>
            <td>CL titles:</td>
            <td>{{stat.cl_titles}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{stat.biggest_win}}</td>
          </tr>
          <tr>
            <td>Biggest win:</td>
            <td>{{stat.biggest_loss}}</td>
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
</style>

<script>
export default {
  name: "results",
  created() {
    fetch("http://localhost:3000/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.stats = result.teams;
      });
  },
  data() {
    return {
      stats: null
    };
  },
  props: ["teamA", "teamB"]
};
</script>
