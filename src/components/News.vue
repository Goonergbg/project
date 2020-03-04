<template>
  <div class="container">
    <div class="row">
      <div class="col m-3">
        <img :src="articles[0].urlToImage" class="artbildbig" />
        <h2 class="arttitlebig">{{articles[0].title}}</h2>
        <p class="arttextbig">{{articles[0].content}}</p>
        <p class="artauthor">{{articles[0].author}}</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img :src="articles[1].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[1].title}}</h2>
        <p class="arttext">{{articles[1].content}}</p>
        <p class="artauthor">{{articles[1].author}}</p>
      </div>
      <div class="col m-3">
        <img :src="articles[2].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[2].title}}</h2>
        <p class="arttext">{{articles[2].content}}</p>
        <p class="artauthor">{{articles[2].author}}</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img :src="articles[3].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[3].title}}</h2>
        <p class="arttext">{{articles[3].content}}</p>
        <p class="artauthor">{{articles[3].author}}</p>
      </div>
      <div class="col m-3">
        <img :src="articles[4].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[4].title}}</h2>
        <p class="arttext">{{articles[4].content}}</p>
        <p class="artauthor">{{articles[4].author}}</p>
      </div>
      <div class="w-100"></div>
      <div class="col m-3">
        <img :src="articles[6].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[6].title}}</h2>
        <p class="arttext">{{articles[6].content}}</p>
        <p class="artauthor">{{articles[6].author}}</p>
      </div>
      <div class="col m-3">
        <img :src="articles[7].urlToImage" class="artbild" />
        <h2 class="arttitle">{{articles[7].title}}</h2>
        <p class="arttext">{{articles[7].content}}</p>
        <p class="artauthor">{{articles[7].author}}</p>
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
  width: 240px;
  height: 170px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}
.arttext {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 14px;
}
.arttitle {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 20px;
}

/* TOP NYHETEN */
.artbildbig {
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  width: 350px;
  height: 230px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}
.arttextbig {
  margin-bottom: 15px;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
}
.arttitlebig {
  margin-top: 15px;
  margin-bottom: 7px;
  font-family: "Fira Sans", sans-serif;
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