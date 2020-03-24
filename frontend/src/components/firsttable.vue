<template>
  <table id="example" class="table table-bordered table-striped table-sm">
    <thead>
      <tr class="tr">
        <th>Position</th>
        <th>Team</th>
        <th>Played</th>
        <th>+ / -</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody class="td" v-if="livescore !== null">
      <tr v-for="lives in livescore.slice(0, 20)" :key="lives.position">
        <td>{{lives.position}}</td>
        <td>{{lives.team}}</td>
        <td>{{lives.played}}</td>
        <td>{{lives.plusminus}}</td>
        <td>{{lives.points}}</td>
      </tr>
      <tr class="table-active"></tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "firsttable",
  created() {
    fetch("/data.json")
      .then(response => response.json())
      .then(result => {
        this.articles = result[2].articles;
        console.log(result[2].articles[0].id);
      });
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.livescore = result.livescore;
        console.log(result.livescore[0]);
      });
  },
  data() {
    return {
      articles: null,
      livescore: null
    };
  }
};
</script>

<style>
</style>