<template>
<div>
 
<form @submit="login">

    <div class="container">
    <label>
          Username
           <i class="fas fa-user"></i>
        </label>
  <input class="input" type="text" placeholder="username" v-model="userName" />
  <label>
          Password
           <i class="fas fa-lock"></i>
        </label>
  <input class="input" type="text" placeholder="password" v-model="passWord" />
  <input class="button" type="submit" value="Log In" />


</div>
</form>


</div>   
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userName: '',
      passWord: '',
    };
  },

  methods: {
    login() {     
      fetch("http://localhost:3000/login/", {
         body: JSON.stringify({
          user_name: this.userName,
          password: this.passWord
        }),
        method: "POST"
      })
    
      .then(response => response)
      .then(result => {
        console.log(result)
      })
    }
  }
    
}
</script>

<style scoped>
.container {
  min-height: 20vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

label {
  font-family: "Fira Sans", sans-serif;
  color: #032942;
  font-size: 20px;
  text-align: left;
  margin-bottom: -13px;
}

.input {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 20px;
  width: 30%;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border-radius: 3px;
  font-family: "Fira Sans", sans-serif;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
}

.button {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 20px;
  width: 15%;
  padding: 4px;
  background: #fff;
  color: #000;
  border-radius: 30px;
  font-family: "Fira Sans", sans-serif;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
}

.button:hover {
  background-color: #455a64;
  color: #fff;
}

.submitResult {
  margin-bottom: 20px;
  font-family: "Fira Sans", sans-serif;
}

.list-disc {
  list-style-type: disc;
}
</style>