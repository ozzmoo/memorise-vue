<template>
  <div id="word-form">
    <h1> ВВОДИ СЛОВА </h1>
    <input type="text" class="unit" v-model="unit">unit
    <br>
    <input type="text" class="rus" v-model="rus">рус
    <br>
    <input type="text" class="eng" v-model="eng">инг
    <input type="button" value="Сохранить" class="save-button" @click="wordSaver">
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "word-input",
  data() {
    return {
      username:'polina',
      unit: '',
      eng: '',
      rus: ''
    };
  }, 
  methods: {
    wordSaver: function(){
      axios
        .post("http://localhost:3000/game/wordbase", {
          username: this.username,
          unit: this.unit,
          eng: this.eng,
          rus: this.rus
        })
    }
  }
}
</script>

<style scoped>
textarea {
   resize: none;
   outline: none;
}
</style>
