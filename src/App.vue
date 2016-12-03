<template>
  <div id="app">
    <background></background>
  </div>
</template>

<script>
import background from './components/background'

export default {
  name: 'app',
  components: {
    background
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
