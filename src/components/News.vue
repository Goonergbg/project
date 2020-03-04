<template>
  <div class="container">
    <div class="row">
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbildbig" />
        <h2 class="arttitlebig">{{articles[0].title}}</h2>
        <p class="arttextbig">{{articles[0].content}}</p>
        <p class="artauthor">{{articles[0].author}}</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.y</p>
        <p class="artauthor">Author</p>
      </div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p class="artauthor">Author</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p class="artauthor">Author</p>
      </div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p class="artauthor">Author</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p class="artauthor">Author</p>
      </div>
      <div class="col m-3">
        <img src="artiklarbild.jpg" class="artbild" />
        <h2 class="arttitle">Titel</h2>
        <p
          class="arttext"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, molestias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p class="artauthor">Author</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    msg: String
  },

  data() {
    return {
      articles: null
    };
  },
  created() {
    fetch("/data.json")
      .then(response => response.json())
      .then(result => {
        this.articles = result[2].articles;
        console.log(result[2].articles[0].id);
      });
  }
};
// };

// fetch("/data.json")
//   .then(response => response.json())
//   .then(result => {
//     console.log(result);
//     // this.articles = result.articles;
//     console.log(result[2].articles[0].id);
//   });
</script>

<style scoped>
/* Kolumner och deras innehåll:  */
.row {
  margin-top: -6em;
  margin-bottom: 3em;
}
.col {
  background-color: rgb(255, 255, 255);
  height: auto; /* GÖR DENNA TILL AUTO SEN */
  float: right;
  box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.089);
}
.artbild {
  margin-top: 25px;
  margin-bottom: 20px;
  float: left;
  width: 220px;
  height: 170px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}
.arttext {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
}
.arttitle {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 25px;
}

/* TOP NYHETEN */
.artbildbig {
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  width: 350px;
  height: 270px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}
.arttextbig {
  margin-bottom: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
}
.arttitlebig {
  margin-top: 15px;
  margin-bottom: 7px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
}
.artauthor {
  float: right;
  margin-top: 10px;
  font-size: 17px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>