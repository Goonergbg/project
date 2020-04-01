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
    <tbody class="td" v-if="serie_a !== null">
      <tr v-for="serie in serie_a.slice(0, 50)" :key="serie.position">
        <td>{{serie.position}}</td>
        <td>{{serie.team}}</td>
        <td>{{serie.played}}</td>
        <td>{{serie.plusminus}}</td>
        <td>{{serie.points}}</td>
      </tr>
      <tr class="table-active"></tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "firsttable",
  created() {
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(result => {
        this.serie_a = result.serie_a;
        console.log(result.livescore[0]);
        console.log(result.livescore[0].position);
      });
  },
  data() {
    return {
      serie_a: null
    };
  }
};
</script>

<style>
</style>