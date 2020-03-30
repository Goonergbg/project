<template>
  <div id="main">
    <div class="bigform">
      <div class="form">
        <label for="form-name">Name:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="userName" />

        <div class="form-group">
          <label for="post">Post:</label>
          <textarea class="form-control" rows="5" id="post" v-model="userPost"></textarea>
        </div>

        <button @click="ForumFetch" type="submit" class="forumButton">Submit</button>
      </div>

      <div class="postBox" v-for="info in info" :key="info.id">
        <div class="calendarIcon">
          <i class="fas fa-calendar-alt"></i>
          {{ info.date }}
        </div>
        <div class="username">
          <i class="fas fa-user"></i>
          {{ info.name }}
        </div>
        <div class="post">
          {{ info.post }}
          <p class="commentIcon" @click="commentField(info.id)">
            <i class="far fa-comment"></i> Comment
          </p>
        </div>

        <!-- Comment-field that shows when user clicks on comment-button -->
        <div v-if="info.id === selectedPost" class="form" id="commentField">
          <div class="form-group">
            <label for="post">Comment:</label>
            <textarea class="form-control" rows="5" id="post" v-model="userComment"></textarea>
          </div>
          <button @click="postComment" type="submit" class="commentButton">Post comment</button>
        </div>

        <!-- Comments -->
        <div class="commentBox" v-if="info.id === selectedPost && createdComment">
          <div class="calendarIcon">
            <i class="fas fa-calendar-alt"></i>
            {{ info.date }}
          </div>
          <div class="username">
            <i class="fas fa-user"></i>
            {{ info.name }}
          </div>
          <div class="comment">
            <p>{{ info.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.commentIcon {
  text-align: right;
  margin-top: 8px;
}

.calendarIcon {
  text-align: right;
  margin-top: 8px;
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

#commentField {
  width: 100%;
}

.commentButton {
  background-color: #455a64;
  font-family: "Fira Sans", sans-serif;
  border-radius: 30px;
  padding: 5px 15px;
  color: white;
}

.commentButton:hover {
  background-color: #ff9900;
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

.postBox {
  background-color: rgb(238, 238, 238);
  width: 50%;
  border-radius: 20px;
  padding: 20px 20px 5px 20px;
  box-shadow: 1px 1px 10px 4px rgba(138, 138, 138, 0.041);
  margin: 5px;
}

.commentBox {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 20px 5px 20px;
  margin-bottom: 10px;
}

/* .comment {
  padding-top: 20px;
} */

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
      userPost: "",
      userName: "",
      info: null,
      selectedPost: null,
      userComment: "",
      createdComment: false
    };
  },

  methods: {
    ForumFetch() {
      fetch("http://localhost:3000/", {
        body: JSON.stringify({
          name: this.userName,
          post: this.userPost
          // comment: this.userComment
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      setTimeout(() => {
        location.reload();
      }, 100); // Laddar om sidan efter 0.1 sekund
    },
    commentField(id) {
      this.selectedPost = id;
    },
    postComment() {
      fetch("http://localhost:3000/", {
        body: JSON.stringify({
          comment: this.userComment
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      setTimeout(() => {
        location.reload();
      }, 100); // Laddar om sidan efter 0.1 sekund
      this.createdComment = true;
    }
  }
};
</script>
