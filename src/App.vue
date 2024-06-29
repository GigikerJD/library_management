<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NavBar/>
  <router-view></router-view>
  <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
