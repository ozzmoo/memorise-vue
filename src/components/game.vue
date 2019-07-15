<template>
  <div id="game">
    <h3 class="rus">{{rus}}</h3>
    <input v-model="eng" type="text" name id="eng-input" />
    <input type="button" value="check" class="game-button" @click="checkWord" />
    <input type="button" value="next" class="game-button" @click="getWord" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "game",
  data() {
    return {
      eng: "",
      rus: "click next",
      username: "ozzmo",
      unit: "unit1",
      checkeng: ""
    };
  },
  methods: {
    getWord: function() {
      const input = (document.getElementById(
        "eng-input"
      ).style.backgroundColor = "white");
      this.eng = '' //Очищаем поле ввода
      axios
        .post("http://localhost:3000/game", {
          username: this.username,
          unit: this.unit
        })
        .then(response => {
          const words = response.data;
          const engword = words.eng;
          const rusword = words.rus;
          this.rus = rusword;
          this.checkeng = engword;
        });
    },
    checkWord: function() {
      const input = document.getElementById("eng-input");
      if (this.eng == "") {
        input.style.backgroundColor = "#ffd667d5"; //В желтый?
        console.log("Пустое поле");
        return;
      }
      if (this.checkeng == this.eng) {
        input.style.backgroundColor = "#00ff2a8f"; //Окраска в зеленый
        console.log("Верно");
      } else {
        input.style.backgroundColor = "#ff4b4b94"; //В красный
        console.log("Ошибка");
      }
    }
  }
};
</script>


<style scoped>
#game {
  padding-left: 11px;
  padding-right: 11px;
  width: 200px;
  display: grid;
  grid-template-columns: 1fr;
}

#eng-input {
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px auto;
  outline: none;
  border: 1px solid rgb(141, 135, 135);

  width: 85%;
  height: 35px;

  color: rgb(95, 95, 95);
  font-weight: light;
  font-size: 25px;
  text-align: center;
}
.game-button {
  cursor: pointer;
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

.game-button:active {
  transition: 0.1s;
  border: 2px solid rgb(145, 117, 117);
}

.rus {
  text-align: center;
  margin: 10px auto;
  width: 100%;
  color: rgb(95, 95, 95);
  font-size: 30px;
}
</style>
