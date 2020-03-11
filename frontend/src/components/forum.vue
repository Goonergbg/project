<template>
  <div id="main">
    <!-- <div>.</div> -->

    <div class="bigform">
      <div class="form">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" />

        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div
          class="comment"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.</div>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div
          class="comment"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.</div>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div
          class="comment"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.</div>
      </div>
    </div>
  </div>
</template>



<style scoped>
#main {
  background-image: url("/soccerfield.jpg");
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
  box-shadow: 1px 1px 10px 4px rgba(138, 138, 138, 0.103);
  margin: 5px;
}

.username {
  font-size: 22px;
}
</style>


<script>
export default {
  name: "forum"
};
</script>


