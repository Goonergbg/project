<template>
  <div class="container">
    <div class="row">
      <div class="artbig">
        <div class="col m-3">
          <img :src="articles[0].urlToImage" class="artbildbig" />
          <h2 class="arttitlebig">{{articles[0].title}}</h2>
          <p class="arttextbig">{{articles[0].content}}</p>
          <p class="artauthor">{{articles[0].author}}</p>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="container-fluid" v-if="articles !== null">
        <div class="row">
          <div class="col-md-6" v-for="arts in articles.slice(1, 3)" :key="arts.title">
            <!------------------------------ COLUMN LEFT 1 ------------------------------>
            <div class="col1">
              <img :src="arts.urlToImage" class="col-bild" />
              <h2 class="col-title">{{arts.title}}</h2>
              <p class="col-text">{{arts.content}}</p>
              <p class="col-author">{{arts.author}}</p>
            </div>
            <!------------------------------ COLUMN LEFT 2 ------------------------------>
          </div>

          <div class="col-md-6" id="overflow">
            <h4 class="livescore-title">LIVE SCORE</h4>
            <table class="table table-bordered table-striped table-sm">
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
                  <td>{{lives.position}}</td>
                </tr>
                <tr class="table-active"></tr>
              </tbody>
            </table>
          </div>
        </div>
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
        console.log(result.livescore);
        console.log(result.livescore[1]);
        console.log(result.livescore[1].played);
      });
  },
  data() {
    return {
      articles: null,
      livescore: null
    };
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
#overflow {
  overflow: auto;
  max-height: 31em;
}
/* Kolumner och deras innehåll:  */
.container-fluid {
  margin-bottom: -3em;
}
.col1 {
  background-color: rgb(255, 255, 255);
  height: auto; /* GÖR DENNA TILL AUTO SEN */
  float: right;
  box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.089);
  margin-bottom: 3em;
}

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
.col-bild {
  margin-top: 25px;
  margin-bottom: 20px;
  float: left;
  width: 240px;
  height: 170px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}

.col-text {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 14px;
}
.col-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 20px;
}
.col-author {
  float: right;
  margin-top: 10px;
  font-size: 15px;
  font-family: "Fira Sans", sans-serif;
}
.col-bild2 {
  margin-top: 25px;
  margin-bottom: 20px;
  float: left;
  width: 240px;
  height: 170px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
  border-radius: 2px;
}

.col-text2 {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 14px;
}
.col-title2 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  color: rgba(0, 0, 0, 0.842);
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
  font-size: 20px;
}
.col-author2 {
  float: right;
  margin-top: 10px;
  font-size: 15px;
  font-family: "Fira Sans", sans-serif;
}
.livescore-title {
  text-align: center;
  margin-bottom: 18px;
  font-family: "Fira Sans", sans-serif;
  text-shadow: 2px 2px 3px rgba(82, 82, 82, 0.068);
}
.tr {
  text-align: center;
}
.td {
  text-align: center;
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
.artbig {
  margin-bottom: 6em;
}
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
  font-size: 15px;
  font-family: "Fira Sans", sans-serif;
}
</style>