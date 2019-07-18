<template>
  <div id="word-form">
    <h4>Введите слова</h4>

    <div class="row">
      <div class="input-field col s12">
        <input v-model="unit" id="unit-name" type="text" class="validate" />
        <label for="unit-name">Unit name</label>
      </div>

      <div class="input-field col s6">
        <input v-model="rus" id="translate-word" type="text" class="validate" />
        <label for="translate-word">Translate</label>
      </div>

      <div class="input-field col s6">
        <input v-model="eng" id="word" type="text" class="validate" />
        <label for="word">Word</label>
      </div>
    </div>
    <input class="waves-effect waves-light btn" type="button" value="Сохранить" @click="wordSaver" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "word-input",
  data() {
    return {
      username: "polina",
      unit: "",
      eng: "",
      rus: ""
    };
  },
  methods: {
    wordSaver: function() {
      if (this.unit.length != 0 && this.eng.length != 0 && this.rus.length != 0) {
        axios.post("http://localhost:3000/game/wordbase", {
          username: this.username,
          unit: this.unit,
          eng: this.eng,
          rus: this.rus
        });
        this.eng = ""
        this.rus = ""
      }
    }
  }
};
</script>

<style scoped>
</style>
