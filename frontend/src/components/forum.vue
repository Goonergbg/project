<template>
  <div id="main">
    <div class="bigform">
      <div class="form">
        <label for="form-name">Name:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="userName" />

        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment" v-model="usersComment"></textarea>
        </div>

        <button @click="ForumFetch" type="submit" class="btn btn-primary">Submit</button>
      </div>

      <div class="commentbox" v-for="info in info" :key="info.id">
        <div class="username">{{ info.name }}</div>
        <div class="comment">
          {{ info.comment }}
          <!-- <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>-->
        </div>
      </div>

      <!-- <div class="commentbox">
        <div class="username">Erik</div>
        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.
          <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>
        </div>
      </div>-->

      <!-- <div class="commentbox">
        <div class="username">Erik</div>
        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.
          <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>
        </div>
      </div>-->
    </div>
  </div>
</template>



<style scoped>
.commentbutton {
  float: right;
  font-size: 18px;
  padding-top: 20px;
}

#main {
  /* background-image: url("/soccerfield.jpg"); */
  height: 100%;
  padding-top: 60px;
}

.bigform {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 50%;
  background-color: rgb(238, 238, 238);
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 30px;
}

.commentbox {
  background-color: rgb(238, 238, 238);
  width: 50%;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 1px 1px 10px 4px rgba(138, 138, 138, 0.041);
  margin: 5px;
}

.username {
  font-size: 22px;
}

.btn.btn-primary {
  border-radius: 30px;
}
</style>


<script>
export default {
  name: "forum",
  created() {
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(result => {
        this.info = result.forum;
      });
  },
  data() {
    return {
      usersComment: "",
      userName: "",
      info: null
    };
  },

  methods: {
    ForumFetch() {
      fetch("http://localhost:3000/", {
        body: JSON.stringify({
          name: this.userName,
          comment: this.usersComment
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      //   //  created() {
      //   fetch("http://localhost:3000/")
      //     .then(response => response.json())
      //     .then(result => {
      //       this.info = result.forum;
      //     });
      // //  }
      setTimeout(() => {
        location.reload();
      }, 1000); // Laddar om sidan efter 1 sekund
    }
  }
};
</script>
