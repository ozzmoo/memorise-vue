<template>
  <div id="game">
    <button
      class="waves-effect waves-light btn show-units"
      @click="getUnits(); showUnitList = !showUnitList">
      Список ваших юнитов
    </button>
    <a
      class="add-unit btn-floating btn-large waves-effect waves-light btn-small purple lighten-2"
      @click="showAddWords = !showAddWords">
      <i class="material-icons">add</i>
    </a>

    <br />
    <div class="unit-list" v-if="showUnitList == true" >
      <input
        v-for="(item, index) in unitsList"
        v-bind:key="index"
        class="waves-effect waves-light btn purple lighten-3 unit-item"
        type="button"
        :value="item"
        @click="setUnit(index)"
      />

    </div>

    <div class="row">
      <word-input class="col s12" v-if="showAddWords"></word-input>
    </div>
    <div class="row">
      <div class="game-form col s6">
        <h4 class="rus">{{rus}}</h4>
        <input v-model="eng" type="text" name id="eng-input" />

        <input type="button" value="check" class="waves-effect waves-light btn" @click="checkWord" />
        <input type="button" value="next" class="waves-effect waves-light btn" @click="getWord" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "game",
  data() {
    return {
      eng: "",
      rus: "click next to start",
      username: "polina",
      unit: "",
      checkeng: "",
      unitsList: [],
      showAddWords: false,
      showUnitList: false
    };
  },
  methods: {
    setUnit: function(i) {
      this.unit = this.unitsList[i];
    },

    getWord: function() {
      const input = (document.getElementById(
        "eng-input"
      ).style.backgroundColor = "white");
      this.eng = ""; //Очищаем поле ввода
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
    },
    getUnits: function() {
      this.unitsList.length = 0;
      axios
        .post("http://localhost:3000/units", { username: this.username })
        .then(response => {
          console.log(response.data[0]);
          for (let item in response.data[0]) {
            if (item != "username" && item != "_id" && item != "_id")
              this.unitsList.push(item);
          }
          console.log(this.unitsList);
        });
    }
  }
};
</script>


<style scoped>
#game {
  margin-top: 50px;
}

.show-units {
  margin-bottom: 10px;
}
.add-unit {
  margin-bottom: 10px;
}

.unit-item {
  margin: 5px;
}
</style>
