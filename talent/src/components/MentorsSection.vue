<template>
    <div>
            <v-card-title class="white--text text-h5">
                > Transformación digital
            </v-card-title>
            <v-col class="pa-4" justify="space-between">
                <v-card class="VER MENTOR SELECCIONADO">
                    <h1>Mentor selecioando</h1>
                </v-card>
                <div class="d-flex flex-column">
                    <v-card v-for="item in mentors" v-bind:key="item.name"
                        class="my-2 pa-4 d-flex flex-row-reverse flex-wrap justify-space-around white--text"
                        max-width="300" color="#21456E">
                        <v-avatar size="56">
                            <v-img :src=item.img></v-img>
                        </v-avatar>
                        <div class="d-flex flex-column align-end">
                            <v-card-title>{{ item.name }}</v-card-title>
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
                mentors: []
            }
        )
    },
    created() {
        getData('mentors').then((data) => {
            data.forEach((doc) => {
                this.mentors.push(doc.data())
            })
        })
    }
}
</script>