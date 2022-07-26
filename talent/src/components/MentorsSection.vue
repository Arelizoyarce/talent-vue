<template>
    <div>
        <v-card-title class="white--text text-h5">
            Transformación digital
        </v-card-title>
        <v-col class="pa-4" justify="space-between">
            <div>
            <v-card v-for="item in mentorSelect" v-bind:key="item.name" color="#21456E" max-width="300" min-height="200" class="d-flex flex-column justify-center aling-center pa-5">
            <v-avatar>
                <v-img :src=item.img></v-img>
            </v-avatar>
                <v-card-title class="white--text">{{item.name}}</v-card-title>
                <v-card-subtitle class="white--text">{{item.role}}</v-card-subtitle>
                <v-card-text>
                    <h4 class="white--text">Habilidades</h4>
                    <div class="my-4">
                    <v-row>
                    <v-card max-width="100" v-for="subitem in item.skills" v-bind:key="subitem" class="ma-1 pa-1">
                        {{subitem}}
                    </v-card>
                    </v-row>
                    </div>
                </v-card-text>
            </v-card>
            <h2 v-show="mentorSelect != ''" class="white--text">Otros Mentores</h2>
            </div>
            <div class="d-flex flex-column">
                <v-card v-for="item in mentors" v-bind:key="item.name" @click="getMentor" :id="item.name"
                    class="my-2 pa-4 d-flex flex-row-reverse flex-wrap justify-space-around white--text" max-width="300"
                    color="#21456E">
                    <v-avatar size="56">
                        <v-img :src=item.img></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column align-end">
                        <v-card-title>{{item.name}}</v-card-title>
                        <v-card-subtitle> {{ item.role }}</v-card-subtitle>
                    </div>
                </v-card>
            </div>
        </v-col>
    </div>
</template>

<script>
import { getData } from '../services/firebase.js'

export default {
    name: 'MentorSection',
    data() {
        return (
            {
                mentors: Array,
                allMentors: Array,
                mentorSelect: Array
            }
        )
    },

    methods: {
        getMentor(event) {
            this.$emit('sendMentor', event.target.id)
            this.mentors = this.allMentors.filter((e)=> e.name != event.target.id)
            this.mentorSelect = this.allMentors.filter((e)=> e.name === event.target.id)
        }
    },

    created() {
        getData('mentors').then((data) => {
            const arrayMentors = []
            data.forEach((doc) => {
                arrayMentors.push(doc.data())
            })
            this.allMentors = arrayMentors
            this.mentors = this.allMentors
        })
        this.mentorSelect=''
    }
}
</script>