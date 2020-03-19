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

        <button @click="ForumFetch" type="submit" class="forumButton">Submit</button>
      </div>

      <div class="commentbox" v-for="info in info" :key="info.id">
        <div class="commentbutton"><i class="fas fa-calendar-alt"></i> {{ info.date }}</div>
        <div class="username"><i class="fas fa-user"></i> {{ info.name }}</div>
        <div class="comment">
         <i class="far fa-comment"></i> {{ info.comment }}
          <!-- <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera 
          </p>-->
        </div>
      
      </div>
    </div>
  </div>
</template>



<style scoped>
.commentbutton {
  float: right;
}

.forumButton {
  background-color: #455a64;
  font-family: "Fira Sans", sans-serif;
  border-radius: 30px;
  padding: 10px 25px;
  color: white;
}

.forumButton:hover {
  background-color: #888888;
}

#main {
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

.comment {
  padding-top: 20px;
}

.username {
  font-size: 20px;
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
      setTimeout(() => {
        location.reload();
      }, 100); // Laddar om sidan efter 0.1 sekund
    }
  }
};
</script>
