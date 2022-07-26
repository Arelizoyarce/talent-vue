<template>
    <div class="d-flex flex-row align-center pa-5">
        <v-avatar size="70">
            <v-img :src=img></v-img>
        </v-avatar>
        <div>
            <v-card color="#002855" class="my-1">
                <v-card-text class="white--text">{{sayHi}}</v-card-text>
            </v-card>
            <v-card color="#002855" class="my-2">
                <v-card-text class="white--text">{{ help }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BotAnswer',
    data() {
        return ({
            sayHi: 'Hola Carina',
            help: 'Escribe brevemente tu consulta',
            img: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
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
    props:{
        inputMenssage: null
    }
}
</script>