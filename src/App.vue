<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from './ui/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Noto Serif NP Hmong', serif !important;
}
</style>
