<template>
<div>
 <div v-if="!submitRegister">   
<form @submit="register">

    <div class="container">
    <label>
          Create username
           <i class="fas fa-user"></i>
        </label>
  <input class="input" type="text" placeholder="Create username" v-model="userName" />
  <label>
          Create password
           <i class="fas fa-lock"></i>
        </label>
  <input class="input" type="text" placeholder="Create password" v-model="passWord" />
  <input class="button" type="submit" value="Register" />

  <div v-if="errors.length">
        <ul class="list-disc">
          <li style="text-align:center;" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

</div>
</form>
 </div>    

<div class="container">
      <div class="submitResult">
        <div v-if="submitRegister">Thanks for joining us</div>
      </div>
    </div>

</div>   
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      userName: '',
      passWord: '',
      errors: [],
      submitRegister: false
    };
  },

  methods: {
    register() {
     if (this.userName && this.passWord) {     
      fetch("http://localhost:3000/register/", {
        body: JSON.stringify({
          user_name: this.userName,
          password: this.passWord
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      return this.submitRegister = true
    }
    this.errors = [];
      if (!this.userName) this.errors.push("Username required");
      if (!this.passWord) this.errors.push("Password required");
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