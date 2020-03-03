<template>
  <div class="mainContainer">
    <div class="table-left">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">Team</th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Team-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-right">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="heading" scope="col">Team</th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Team-info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Team-info</td>
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
  text-align: right;
}

thead th {
  border-top: none;
}
</style>

<script>
export default {
  name: "results"
};
</script>
