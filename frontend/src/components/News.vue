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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <!------------------------------ COLUMN LEFT 1 ------------------------------>
            <div class="col1">
              <img :src="articles[1].urlToImage" class="col-bild" />
              <h2 class="col-title">{{articles[1].title}}</h2>
              <p class="col-text">{{articles[1].content}}</p>
              <p class="col-author">{{articles[1].author}}</p>
            </div>
            <!------------------------------ COLUMN LEFT 2 ------------------------------>
            <div class="col2">
              <img :src="articles[2].urlToImage" class="col-bild2" />
              <h2 class="col-title2">{{articles[2].title}}</h2>
              <p class="col-text2">{{articles[2].content}}</p>
              <p class="col-author2">{{articles[2].author}}</p>
            </div>
          </div>

          <div class="col-md-6">
            <h4 class="livescore-title">LIVE SCORE</h4>
            <table class="table table-bordered table-sm">
              <thead>
                <tr class="tr">
                  <th>Position</th>
                  <th>Team</th>
                  <th>Played</th>
                  <th>+ / -</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody class="td">
                <tr>
                  <td>1</td>
                  <td>TB - Monthly</td>
                  <td>01/04/2012</td>
                  <td>Default</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>2</td>
                  <td>TB - Monthly</td>
                  <td>01/04/2012</td>
                  <td>Approved</td>
                  <td>Declined</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>TB - Monthly</td>
                  <td>02/04/2012</td>
                  <td>Declined</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>4</td>
                  <td>TB - Monthly</td>
                  <td>03/04/2012</td>
                  <td>Pending</td>
                  <td>Declined</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>6</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>8</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>10</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
                <tr class="table-active">
                  <td>12</td>
                  <td>TB - Monthly</td>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                  <td>Declined</td>
                </tr>
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

  data() {
    return {
      articles: null,
      livescore: null
    };
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
        this.livescore = result;
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
.col2 {
  background-color: rgb(255, 255, 255);
  height: auto; /* GÖR DENNA TILL AUTO SEN */
  float: right;
  box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.089);
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