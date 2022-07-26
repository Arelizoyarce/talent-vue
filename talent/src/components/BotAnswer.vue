<template>
    <div class="d-flex flex-row align-center pa-5">

        <v-avatar size="70">
            <v-img :src=img></v-img>
        </v-avatar>

        <div>
            <v-card color="#002855" class="my-1">
                <v-card-text class="white--text">{{ sayHi }}</v-card-text>
            </v-card>
            <v-card color="#002855" class="my-2">
                <v-card-text class="white--text">{{ help }}</v-card-text>
            </v-card>
            <div v-if="this.mentorCalled===''"> Seleciona un mentor </div>
        </div>

    </div>
</template>

<script>
import { addData } from '../services/firebase.js'
import {answers} from './answerFlow.js'

export default {
    name: 'BotAnswer',
    data() {
        return ({
            sayHi: 'Hola Carina',
            help: 'Escribe brevemente tu consulta',
            img: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
            answer: String,
            mentorCalled: ''
        })
    },

    methods: {
        receivedMenssageUser(receivedMenssage, mentor){
            this.mentorCalled= mentor
            if(receivedMenssage != ''){
                //first question
                if(receivedMenssage.includes('consulta')|| receivedMenssage.includes('hola')|| receivedMenssage.includes('duda')
                ){
                    this.answer= answers.menssage + '1.' + answers.options[1]+ '2.'+ answers.options[2] + '3.'+ answers.options[3]
                }else if(receivedMenssage.includes('1', 0)){
                    this.answer= answers.menssage1.m + mentor
                }else if(receivedMenssage.includes('2', 0)){
                    this.answer= answers.menssage2
                }else if(receivedMenssage.includes('3',0)){
                    this.answer= answers.menssage3
                }else if(receivedMenssage.includes('si')|| receivedMenssage.includes('Si')){
                    this.answer = 'Los horarios son los siguientes'
                }else if(receivedMenssage.includes('no')|| receivedMenssage.includes('No')){
                    this.answer= answers.menssage
                }else{
                    this.answer= 'Muchas gracias por tu consulta vuelve pronto'
                }
            setTimeout(() => {
                const answerBot = {
                    name: 'Kami',
                    mentor: mentor,
                    menssage: this.answer,
                    time: Date()
                }
                addData(answerBot)
            }, 1000)
            }
        }
    }
}
</script>