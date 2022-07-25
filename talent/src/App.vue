<template>
  <v-app>
      <NavbarApp></NavbarApp>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue';

export default {
  name: 'App',

  components: {
    NavbarApp
},

  data: () => ({
    //
  }),
};
</script>

<style>
#app{
  background-color: #002855;
}
</style>
