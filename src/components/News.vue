<template>
  <div class="container">
    <div class="row">
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sunt esse nulla dolorum pariatur. Blanditiis hic, similique officia cupiditate facilis rem quos aut enim tenetur error alias quaerat incidunt impedit!</p>
      </div>
      <div class="col m-3">
                <img src="artiklarbild.jpg" class="artbild" />
                Column</div>
      <div class="w-100"></div>
      <div class="col m-3">Column</div>
      <div class="col m-3">Column</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.col {
  background-color: green;
  height: auto; /* GÖR DENNA TILL AUTO SEN */
  float: right;
}
.artbild {
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  width: 170px;
  height: 190px;
  margin-right: 15px;
}
.arttext {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>