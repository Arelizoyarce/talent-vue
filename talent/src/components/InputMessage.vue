<template>
  <div class="d-flex flex-row">
    <v-input>
      <v-text-field label="Escribir mensaje" hide-details="auto" v-model="input"></v-text-field>
    </v-input>
    <v-icon class="ma-3">
      fa fa-paperclip
    </v-icon>
    <v-btn elevation="2" color="#CE0F65" class="white--text" v-on:click="sendMenssage">
      Enviar
    </v-btn>
  </div>
</template>

<script>
import { addData } from "../services/firebase.js"
export default {
  name: 'InputMessage',
  data() {
    return ({
      input: ''
    })
  },
  methods: {
    sendMenssage() {
      const containerMenssage ={
        user: 'Carina',
        mentor: 'Omaira',
        menssage: this.input,
        time: new Date()
      }
      
      addData(containerMenssage)
      this.input = ''
    }
  }
}
</script>