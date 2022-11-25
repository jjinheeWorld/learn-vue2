<!-- Vue 클래스 바인딩 -->

<template>
  <div id="app">
  <!-- 미리 클래스 이름에 스타일을 지정해 놓고, true면 클래스 적용 false면 클래스 미적용 -->
   
  <!-- <div v-bind:class="{active : isActive, text: isText}">코코몽 귀여워</div> -->
   <div v-bind:class="classObj">코코몽 귀여워</div>

  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      // classObj: {active: true, text: false},
      isActive: true,
      isText: false,
    }
  },
  computed: {
    classObj() {
      return {
        active: this.isActive && this.isText, // false
        text: this.isActive || this.Text, // true
      }
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

.active {border: 2px solid red;}
</style>
