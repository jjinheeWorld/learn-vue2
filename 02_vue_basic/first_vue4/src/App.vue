<template>
  <div id="app">
    <!-- <div v-bind:style="{color:activeColor, fontSize: fontSize + 'px'}">Hi</div> -->
    
    <div v-bind:style="activeStyle">Hi</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      activeStyle: {
      color: 'red',
      fontSize: '30px'
      },
      activeColor: 'red',
      fontSize: 32,
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
