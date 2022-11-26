<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-if="hi">안녕하세요~</div>
    <div v-else>안녕히가세요!</div>
    <button @click="change">바꾸기</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hi: true,
    }
  },
  methods: {
  change() {
    this.hi = !this.hi;
   }
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
