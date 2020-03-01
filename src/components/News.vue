<template>
  <div class="container">
    <div class="row">
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbildbig" />
        <h2 class="arttitlebig">Titel</h2>
        <p
          class="arttextbig"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.y</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.y</p>
      </div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sunt esse nulla dolorum pariatur.</p>
      </div>
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
/* Kolumner och deras innehåll:  */
.col {
  background-color: green;
  height: auto; /* GÖR DENNA TILL AUTO SEN */
  float: right;
}
.artbild {
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  width: 200px;
  height: 170px;
  margin-right: 15px;
}
.arttext {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.arttitle {
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

/* TOP NYHETEN */
.artbildbig {
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  width: 350px;
  height: 270px;
  margin-right: 15px;
}
.arttextbig {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}
.arttitlebig {
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 45px;
}
</style>