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
      input: '',
    })
  },

  props: ['receivedMentor'],

  methods: {
    sendMenssage() {
      this.$emit('setevent', this.input)
      const containerMenssage = {
        name: 'Carina',
        mentor: this.receivedMentor,
        menssage: this.input,
        time: Date()
      }
      if (this.input != '') {
        addData(containerMenssage)
        this.input = ''
      }
    }
  }
}
</script>