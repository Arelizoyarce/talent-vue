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
            <div v-if="this.mentorCalled === ''"> Seleciona un mentor </div>
        </div>

    </div>
</template>

<script>
import { addData } from '../services/firebase.js'
import { answers } from './answerFlow.js'

export default {
    name: 'BotAnswer',
    data() {
        return ({
            sayHi: 'Hola Carina',
            help: 'Escribe brevemente tu consulta',
            img: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
            answer: String,
            mentorCalled: '',
            arrayMenssages: []
        })
    },

    methods: {
        receivedMenssageUser(receivedMenssage, mentor) {
            this.mentorCalled = mentor;
            this.arrayMenssages.push(receivedMenssage);
            let arrayMenssagesAux = this.arrayMenssages;
            arrayMenssagesAux.forEach((e, i) => {
                if (i === 0) {
                    if (e.includes('hola') || e.includes('ayuda') || e.includes('consulta')) {
                        this.answer = answers.menssage
                    } else {
                        this.answer = answers.menssage
                    }
                }
                if (i === 1) {
                    if (e==='1') {
                        this.answer = answers.options.mentor.menssage + this.mentorCalled
                    } else if(e==='2'){
                        this.answer=answers.options.project.menssage
                    }else if(e==='3'){
                        this.answer= answers.options.certification.menssage
                    }else if( e==='4'){
                        this.answer=answers.options.others.menssage
                    }else{
                        this.answer=answers.menssage
                    }
                } else if (i === 2) {
                    if (e === '1') {
                        this.answer = answers.options.mentor.options[1]
                    } else if (e==='2') {
                        this.answer = answers.options.mentor.options[2]
                    } else {
                        arrayMenssagesAux=this.arrayMenssages
                        this.answer = answers.menssage
                    }
                }
            })
            setTimeout(() => {
                const answerBot = {
                    name: 'Kami',
                    mentor: this.mentorCalled,
                    menssage: this.answer,
                    time: Date()
                }
                addData(answerBot)
            }, 1000)
        }
    }
}
</script>