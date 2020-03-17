<template>
  <div id="main">
    <div class="bigform">
      <div class="form">
        <label for="form-name">Name:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" />

        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.
          <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>
        </div>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.
          <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>
        </div>
      </div>

      <div class="commentbox">
        <div class="username">Erik</div>
        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, impedit. Illum, fuga? Perspiciatis, officia doloribus. Porro nulla, maiores blanditiis doloremque inventore, ut eligendi consequatur sit numquam iste vero earum in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ratione repellendus autem. Doloribus praesentium ut, deserunt esse, recusandae quo perferendis veritatis, non cupiditate corrupti sit consectetur animi! Voluptatum, ex labore.
          <p class="commentbutton">
            <i class="far fa-comment"></i> Kommentera
          </p>
        </div>
      </div>
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

.btn.btn-primary {
  border-radius: 30px;
}
</style>


<script>
export default {
  name: "forum"
};
</script>


