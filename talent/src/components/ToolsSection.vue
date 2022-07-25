<template>
    <div class="d-flex flex-row my-6 justify-lg-space-between">
        <v-card class=" d-flex flex-row mx-auto pa-7 rounded-lg" max-width="330" outlined color="#21456E">
            <div>
                <v-card-title class="text-h5 white--text">
                    Mis notas
                </v-card-title>
                <v-card-actions>
                    <v-btn block color="#CE0F65" class="white--text">
                        IR
                    </v-btn>
                </v-card-actions>
            </div>
            <v-list-item-avatar tile size="90">
                <v-icon x-large>fa fa-newspaper</v-icon>
            </v-list-item-avatar>
        </v-card>
        <v-card class=" d-flex flex-row mx-auto pa-11 rounded-lg" max-width="344" outlined color="#21456E">
            <div>
                <v-card-title class="text-h5 white--text">
                    Noticias
                </v-card-title>
                <v-card-actions>
                    <v-btn block color="#CE0F65" class="white--text">
                        IR
                    </v-btn>
                </v-card-actions>
            </div>
            <v-list-item-avatar tile size="90">
                <v-icon x-large>fa fa-newspaper</v-icon>
            </v-list-item-avatar>
        </v-card>
        <v-card class=" d-flex flex-row mx-auto pa-7 rounded-lg" max-width="344" outlined color="#21456E">
            <div>
                <v-card-title class="text-h5 white--text">
                    Contactar con un mentor
                </v-card-title>
                <v-card-actions>
                    <v-btn block color="#CE0F65">
                        <router-link :to="'/contactMentor'" class="text-decoration-none white--text">ENVIAR MENSAJE</router-link>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-list-item-avatar tile size="90">
                <v-icon x-large>fa fa-newspaper</v-icon>
            </v-list-item-avatar>
        </v-card>
    </div>
</template>