<template>
  <div id="login">
    <input v-model="username" type="text" placeholder="username" class="login-input username" />
    <input v-model="password" type="password" placeholder="password" class="login-input password" />
    <input type="button" class="login-button" value="log in" @click="checkUserData" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    checkUserData: function() {
      axios
        .post("http://localhost:3000/login", {
          login: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>

<style scoped>
#login {
  padding-left: 11px;
  padding-right: 11px;
  width: 200px;
  display: grid;
  grid-template-columns: 1fr;
}

.login-input {
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
.login-button{
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

.login-button:active{
  transition: .2s;
  border: 2px solid rgb(145, 117, 117);
}


</style>
