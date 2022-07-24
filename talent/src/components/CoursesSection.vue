<template>
    <div>
        <h2>Cursos</h2>
        <v-card class="white--text">
            <p>{{}}</p>
        </v-card>
    </div>
</template>

<script>
import { getData } from '../services/firebase.js'

export default {
    name: 'CoursesSection',
    data(){
    },
    methods:{
    getCourses(){
        getData('courses').then((result) => {
            result.forEach((doc)=>{
                console.log(doc.get)
            })
        })
        }
    }

    // data: () => ({
    //     return {
    //         console.log('HOLA MUNDO')
    //     }
    // }),
    // methods: {

    // }
}
// import  ;

// data.getData('courses').then((data)=>{
//     console.log(data)
// }
// )

</script>