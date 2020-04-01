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
    <tbody class="td" v-if="la_liga !== null">
      <tr v-for="liga in la_liga.slice(0, 50)" :key="liga.position">
        <td>{{liga.position}}</td>
        <td>{{liga.team}}</td>
        <td>{{liga.played}}</td>
        <td>{{liga.plusminus}}</td>
        <td>{{liga.points}}</td>
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
        console.log(result);
        this.la_liga = result.la_liga;
        console.log(result.la_liga[0]);
        console.log(result.la_liga[0]);
      });
  },
  data() {
    return {
      la_liga: null
    };
  }
};
</script>

<style>
</style>