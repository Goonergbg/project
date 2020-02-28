<template>
      <div class="main">
      <select class="input">
       <option value="ManUtd">Manchester United</option>
</select>

      <select class="input">
       <option value="Chelsea">Chelsea</option>
</select>

<br>
<br>
<input type="button" class="button-compare" value="Jämför Lagen">
      </div>
</template>

<script>
export default {
    name: "Compare"
}
</script>

<style scoped>
.main {
  min-height: 60vh;
}
.button-compare {
  margin-top: 10px;
  width: 20%;
  margin-right: 20px;
  font-size: 20px;
  height: 40px;
  border: 1px solid #CCC;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border-bottom: solid 4px #e83e8c;
  border-radius: 3px;
}
.input {
  margin-top: 150px;
  width: 20%;
  margin-right: 20px;
  font-size: 20px;
  height: 40px;
  border: 1px solid #CCC;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border-bottom: solid 4px #e83e8c;
  border-radius: 3px;
}
</style>