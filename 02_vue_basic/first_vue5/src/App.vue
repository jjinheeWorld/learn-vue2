<template>
  <div id="app">
    <!-- 이벤트 객체 -->
   <!-- <button v-on:click="sumAge">add</button> -->

   <!-- 파라미터 전달-->
   <button v-on:click="sumAge(27)">add</button>
   <p>{{counter}}</p>

    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    // sumAge(e) { // 이벤트 객체
    //   this.counter++;
    //   console.log(e.target);
    // }
    sumAge(num) { // 이벤트 객체 ❌
      this.counter += num;
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
