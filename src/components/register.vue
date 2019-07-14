<template>
  <div id="reg">
    <input v-model="username" type="text" placeholder="username" class="reg-input username" />
    <input v-model="password" type="password" placeholder="password" class="reg-input password" />
    <input type="button" class="reg-button" value="check me" @click="regNewUser" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    regNewUser: function() {
      if (this.username.length > 0 && this.password > 0) {
        axios
          .post("http://localhost:3000/reg", {
            login: this.username,
            password: this.password
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("Пустые поля!")
      }
    }
  }
};
</script>

<style scoped>
#reg {
  padding-left: 11px;
  padding-right: 11px;
  width: 200px;
  display: grid;
  grid-template-columns: 1fr;
}

.reg-input {
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px auto;
  outline: none;
  border: 1px solid rgb(141, 135, 135);

  width: 85%;
  height: 30px;

  color: rgb(95, 95, 95);
  font-weight: light;
  font-size: 15px;
}
.reg-button {
  margin: 10px auto;
  outline: none;
  border: 1px solid rgb(141, 135, 135);
  background-color: rgba(255, 255, 255, 0);
  width: 70%;
  height: 30px;
  padding: 2px 10px;
  color: rgb(95, 95, 95);
  font-weight: light;
  font-size: 15px;
}

.reg-button:active {
  transition: 0.2s;
  border: 2px solid rgb(145, 117, 117);
}
</style>
