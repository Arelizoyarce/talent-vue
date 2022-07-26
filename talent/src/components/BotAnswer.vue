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
        </div>
    </div>
</template>

<script>
import { addData } from '../services/firebase.js'
export default {
    name: 'BotAnswer',
    data() {
        return ({
            sayHi: 'Hola Carina',
            help: 'Escribe brevemente tu consulta',
            img: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
            menssageUser: null,
            answer: 'RESPUESTA DEFAULT'
            // answers: {
            //     menssage: 'Hola, para ayudarte, indicame sobre qué tema tienes dudas, marcando una de las siguiente opciones',
            //     options: {
            //         1: {
            //             menssage: 'Deseas agendar con el tutor Omaira',
            //             options: {
            //                 1: {
            //                     menssage: 'mostrar disponibilidad'
            //                 },
            //                 2: {
            //                     menssage: this.answers.menssage
            //                 }
            //             }
            //         },
            //         2: {
            //             menssage: 'Aquí te adjunto un tutorial de cómo subir tu proyecto final',
            //             video:'https://youtu.be/eWMN2ueNzSQ'
            //         },
            //         3: {
            //             menssage: 'El cerificado se otroga al ser aprovado tu proyecto final'
            //         },
            //         4: {
            //             menssage:'Especifica tu consulta, proto te atenderá personal especializado'
            //         }
            //     }
            // },
        })
    },
    props: ['menssage', 'emitAnswerBot'],
    methods: {
        receivedMenssageUser(menssage){
            // console.log('estoy dentro de botcomponente y recibi el mensaje')
            // this.menssageUser = menssage
            if(menssage != ''){
            return setTimeout(() => {
                const answerBot = {
                    name: 'Kami',
                    mentor: 'Omalia',
                    menssage: this.answer,
                    time: Date()
                }
                addData(answerBot)
            }, 1000)
            }
        }
        // sendAnswer(menssage){
        //     this.menssageUser= menssage;
        //     console.log('ESTOY EN BOT COMPONENT', menssage)
        // }
        // setAnswer() {
        //     console.log('estoy dentro de set anwer en bot component')
        //     this.emitAnswer(this.answer)
        //     // if (this.menssageInput != null) {
        //     //     console.log('funciono spy anwer en bot chat answer', this.menssageInput)
        //     //     if (this.menssageInput.includes('hola')) {
        //     //         console.log('entre al includes')
        //     //         this.answer = 'HOLA MUNDO'
        //     //     }
        //     // }
        // }
    },
    mounted() {
        this.menssageUser
    }
}
</script>