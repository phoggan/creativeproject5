<template>
  <div id="app">
    <app-header></app-header>
    <!-- <h1>This is a test</h1> -->
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
    name: 'App',
    components: { AppHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -5px;
  background: #fffcff;
}
</style>
