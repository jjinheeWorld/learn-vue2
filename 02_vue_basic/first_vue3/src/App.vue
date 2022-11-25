<template>
  <div id="app">
    <!-- 배열 -->
    <div v-bind:class="[active, error]">코코몽은</div>
    <div v-bind:class="[{active: isActive}, error]">정말</div>
    <!-- 삼항 연산자 -->
    <div v-bind:class="[isActive ? active : text]">귀여워</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
       isActive: true,
       active: 'active',
       error: 'text'
    }
  },
  computed: {
    
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

.active {border: 1px solid red}
</style>
