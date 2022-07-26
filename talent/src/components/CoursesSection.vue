<template>
    <div class="d-flex flex-column white--text my-5">

        <h2 class="d-inline-flex mx-16 pl-xs-6">Cursos</h2>

        <div class="d-flex flex-row flex-wrap justify-space-around">
            <v-card v-for="item in result" v-bind:key="item.name" :disabled="item.availability === false"
                max-width="350" color="#21456E" class="my-4 pa-4" elevation="6">
                <div>

                    <div class="d-flex flex-row white--text justify-space-between">
                        <div>
                            <v-card max-width="80" max-height="30" color="yellow"
                                class="d-inline-flex align-center pa-2">
                                {{ item.status }}
                            </v-card>
                            <v-card-title>{{ item.name }}</v-card-title>
                            <v-card-subtitle>Curso</v-card-subtitle>
                        </div>
                        <v-avatar size="50" class="d-flex align-self-end" color="yellow">
                            <v-img :src=item.icon></v-img>
                        </v-avatar>
                    </div>

                    <v-card-text class="white--text">
                        {{ item.description }}
                        <v-spacer></v-spacer>
                        <v-row class="my-3">
                            <div class="pa-2">{{ item.lessons }}</div>
                            <div class="pa-2">{{ item.time }}</div>
                            <div class="pa-2">{{ item.kcoins }}</div>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-timeline align-top dense>
                            <v-timeline-item v-for="lesson in item.syllabus" v-bind:key="lesson" small color="white">
                                <div class="font-weight-normal">
                                    <strong>{{ lesson }}</strong>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                        <v-card-actions>
                            <v-btn block color="#CE0F65" class="white--text">
                                Ver curso completo
                            </v-btn>
                        </v-card-actions>
                    </v-card-text>

                </div>

            </v-card>
        </div>

    </div>
</template>

<script>
import { getData } from '../services/firebase.js'

export default {
    name: 'CoursesSection',
    data() {
        return ({
            result: []
        })
    },

    created() {
        getData('courses').then((data) => {
            data.forEach((doc) => {
                this.result.push(doc.data())
            })
        })
    },
}

</script>