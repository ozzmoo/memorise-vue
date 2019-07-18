<template>
  <div id="reg">
    <div class="row">
      <div class="input-field col s12">
        <input v-model="username" id="user-name" type="text" class="validate" />
        <label for="user-name">Username</label>
      </div>

      <div class="input-field col s6">
        <input v-model="password" id="pass-word" type="Password" class="validate" />
        <label for="pass-word">Password</label>
      </div>
    </div>
    <input class="waves-effect waves-light btn" type="button" value="Sign up" @click="regNewUser(); sendRegStatus()"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      password: "",
      username: "",
      regStatus: false
    };
  },
  methods: {
    regNewUser: function() {
      if (this.username.length > 0 && this.password.length > 0) {
        axios
          .post("http://localhost:3000/reg", {
            login: this.username,
            password: this.password
          })
          .then(response => {
            console.log(response.data);
            this.regStatus = response.data.status
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("Пустые поля!");
      }
    },
    sendRegStatus: function(){
      this.$emit('regStatus', this.regStatus);
    }
  }
};
</script>

<style scoped>

#reg{
  margin-top: 100px;
}
</style>
