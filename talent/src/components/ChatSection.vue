<template>
    <div>
        <v-btn outlined color="white">
            <router-link :to="'/'" class="text-decoration-none white--text">Volver</router-link>
        </v-btn>
        <h2 class="">Chat reciente</h2>

        <v-card min-width="1000" min-height="500" max-height="500" class=" my-4" color="#21456E">
            <!-- <v-virtual-scroll min-height="500">
                <template> -->
            <BotAnswer></BotAnswer>
            <div v-for="item in menssage" v-bind:key="item.id" max-width="200" :class="item.name === 'Carina' ? 'd-flex flex-column align-end' : 'd-flex flex-column align-start'">
                <v-card>
                    {{ item.menssage }}
                </v-card>
            </div>
            <!-- </template>
            </v-virtual-scroll> -->
        </v-card>
        <InputMessage></InputMessage>
    </div>
</template>

<script>
import { getMenssage } from "../services/firebase.js"
import BotAnswer from "./BotAnswer.vue"
import InputMessage from "./InputMessage.vue"
export default {
    name: 'ChatSection',
    data() {
        return ({
            menssage: null,
        })
    },
    components: {
        BotAnswer,
        InputMessage
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
        },
    },
    created() {
        this.printMenssage()
    }
}
</script>