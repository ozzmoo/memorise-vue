<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper purple lighten-2">
        <a href="#" class="brand-logo">Memrise</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#" v-if="!logStatus" @click="showLogin">Login</a>
          </li>
          <li>
            <a href="#" v-if="!logStatus" @click="showSignUp">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>

    <reg-in v-if="isSignedUp == false" @regStatus="isRegged"></reg-in>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#" @click="showLogin">Login</a>
      </li>
      <li>
        <a href="#" @click="showSignUp">Sign Up</a>
      </li>
    </ul>

    <div class="temp-login" v-if="tempLogin">
      <div class="row">
        <div class="input-field col s6">
          <input v-model="username" id="reg-user-name" type="text" class="validate" />
          <label for="reg-user-name">Имя пользователя</label>
          <input class="waves-effect waves-light btn" type="button" value="Войти" @click="isLogged" />
        </div>
      </div>
    </div>

    <word-game v-if="logStatus"></word-game>
  </div>
</template>

<script>
import axios from "axios";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

export default {
  name: "app",
  data() {
    return {
      username: "",
      logStatus: false,
      tempLogin: false,
      isSignedUp: true
    };
  },
  methods: {
    isLogged: function() {
      axios
        .post("http://localhost:3000/login", {
          login: this.username
        })
        .then(response => {
          console.log(response.data);
          if (response.data.logStatus == true) {
            this.logStatus = true;
            this.tempLogin = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    showLogin: function() {
      this.tempLogin = true;
      this.isSignedUp = true;
    },
    showSignUp: function() {
      this.isSignedUp = false;
      this.tempLogin = false;
    },
    isRegged: function(status) {
      console.log(status);
      this.isSignedUp = status;
    }
  }
};
</script>

<style>
* {
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
}
.brand-logo {
  margin-left: 10px;
}

.temp-login {
  margin-top: 50px;
}
</style>
