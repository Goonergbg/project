<template>
  <div>
    <div v-if="!submitFeedback">
    <form @submit="submit">
      <h3 style="text-align:center;">Share your feedback with us</h3>
      <div v-if="errors.length">
        <ul class="list-disc">
          <li style="text-align:center;" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <div class="container">
        <label>
          Name
          <i class="fas fa-signature"></i>
        </label>
        <input class="input" type="text" v-model="name" />
        <label>
          Feedback
          <i class="far fa-comments"></i>
        </label>
        <textarea v-model="feedback" />
        <input class="button" type="submit" value="Send feedback" />
      </div>
    </form>
    </div>

    <div class="container">
      <div class="submitResult">
        <div v-if="submitFeedback">Thanks for sharing your feedback!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      feedback: "",
      errors: [],
      submitFeedback: false
    };
  },
  methods: {
    submit() {
      if (this.name && this.feedback) { return this.submitFeedback = true }
      this.errors = [];
      if (!this.name) this.errors.push("Name required");
      if (!this.feedback) this.errors.push("Feedback required");
    }
  }
};
</script>

<style scoped>
.list-disc {
  list-style-type: disc;
}
textarea {
  font-size: 20px;
  width: 50%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 20px;
  font-family: "Fira Sans", sans-serif;
  box-shadow: 1px 2px 10px 5px rgba(82, 82, 82, 0.068);
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

.container {
  display: flex;
  flex-direction: column;
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