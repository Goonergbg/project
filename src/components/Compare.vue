<template>
      <div>
      <select class="input">
       <option value="ManUtd">Manchester United</option>
</select>

      <select class="input">
       <option value="Chelsea">Chelsea</option>
</select>

<br>
<br>
<input type="submit" value="Jämför Lagen" class="input">
      </div>
</template>

<script>
export default {
    name: "Compare"
}
</script>

<style scoped>
.input {
  width: 20%;
  margin-right: 20px;
  font-size: 20px;
  height: 40px;
  border: 1px solid #CCC;
  padding-left: 10px;
  background: #222;
  color: #FFF;
  border-bottom: solid 4px #FFA500;
  border-radius: 3px;
}
</style>