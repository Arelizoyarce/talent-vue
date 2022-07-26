<template>
    <div>
        <v-btn outlined color="white">
            <router-link :to="'/'" class="text-decoration-none white--text">Volver</router-link>
        </v-btn>
        <h2 class="">Chat reciente</h2>

        <v-card min-width="1000" min-height="500" max-height="500" class=" my-4" color="#21456E">
            <BotAnswer ref="BotAnswer"></BotAnswer>
            <div v-for="item in menssage" v-bind:key="item.id" max-width="200" class="d-flex flex-column align-end">
                <v-card>
                    {{ item.menssage }}
                </v-card>
            </div>
        </v-card>
        <InputMessage @setevent="set" :receivedMentor="mentor"></InputMessage>
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
            menssage: Array,
            allMenssages: Array,
            input: String,
        })
    },
    components: {
        BotAnswer,
        InputMessage
    },
    props:['mentor'],
    methods: {
        printMenssage() {
            return getMenssage((query) => {
                const arrayMenssages = [];
                query.forEach((doc) => {
                    arrayMenssages.push(doc.data())
                })
                this.allMenssages = arrayMenssages;
                this.menssage= this.allMenssages.filter(e=> e.mentor=== this.mentor)
                console.log(this.menssage)
            })
        },
        set(n) {
            this.$refs.BotAnswer.receivedMenssageUser(n, this.mentor)
        },
    },
}
</script>