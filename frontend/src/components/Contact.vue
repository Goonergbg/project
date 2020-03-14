<template>
<div>
  <form @submit="submit">
    <h3 style="text-align:center;">Share your feedback with us</h3>
      <div v-if="errors.length">
    <ul>
      <li style="text-align:center;" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
      </div>
<div class="container">
        <label>Name <i class="fas fa-signature"></i></label>
        <input class="input" type="text" v-model="name" /> 
        <label>Feedback <i class="far fa-comments"></i></label>
        <textarea v-model="feedback" /> 
    <input class="input" type="submit" value="Send feedback" /> 
</div>
  </form>
  
  <div class="container">
    <div class="submitResult">
    <div v-if="submitFeedback">
      Thanks for sharing your feedback!
    </div>
     </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
    name: '',
    feedback: '',
    errors: [],
    submitFeedback: false
  }
},
  methods: {
    submit() {
      if(this.name && this.feedback) return this.submitFeedback = true
      this.errors = []
      if(!this.name) this.errors.push('* Name required')
      if(!this.feedback) this.errors.push('* Feedback required')
    }
  }
}
</script>

<style scoped>
textarea {
  font-size: 20px;
  width: 50%;
  height: 150px;
  border: 1px solid #ccc;
  border-bottom: solid 3px #455a64;
  border-radius: 3px;
  margin: 20px;
  font-family: "Fira Sans", sans-serif;
  box-shadow: 5px 5px 18px #88b2c5;
  
}

.input {
  font-size: 20px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 20px;
  width: 50%;
  padding-left: 10px;
  background: #fff;
  color: #000;
  border-bottom: solid 3px #455a64;
  border-radius: 3px;
  font-family: "Fira Sans", sans-serif;
  box-shadow: 5px 5px 18px #88b2c5;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.submitResult {
  margin-bottom: 20px;
  font-family: "Fira Sans", sans-serif;
}

label {
  width: 50%;
  font-family: "Fira Sans", sans-serif;
	color: #032942;
	font-size: 20px;
	text-align: left;
  margin-bottom: -13px;
}

</style>