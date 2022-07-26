<template>
    <div>
        <v-btn outlined color="white">
            <router-link :to="'/'" class="text-decoration-none white--text">Volver</router-link>
        </v-btn>
        <h2 class="">Chat reciente</h2>
        <v-card min-width="1000" min-height="500" max-height="500" class="pa-4 my-4" color="#21456E">
            <div>
                <v-avatar size="56">
                    <v-img></v-img>
                </v-avatar>
                <div>
                    <v-card color="#002855" class="my-2">
                        <v-card-text class="white--text">¡Hola, soy Kami!</v-card-text>
                    </v-card>
                    <v-card color="#002855" class="my-2">
                        <v-card-text class="white--text">Escribe prevemente cuál es tu consulta</v-card-text>
                    </v-card>
                </div>
            </div>
            <v-card v-for="item in menssage" v-bind:key="item.id">
                {{ item.menssage }}
            </v-card>
            <v-card>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import { getMenssage } from "../services/firebase.js"
export default {
    name: 'ChatSection',
    data() {
        return ({
            menssage: null,
        })
    },
    methods: {
        printMenssage() {
            getMenssage((query) => {
                const allMenssages = [];
                query.forEach((doc) => {
                    allMenssages.push(doc.data())
                })
                this.menssage = allMenssages;
            })
        }
    },
    created() {
        this.printMenssage()
    }
}
</script>