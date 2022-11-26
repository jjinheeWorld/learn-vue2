<template>
  <div id="app">
   <ul>
    <li v-for="(item, i) in arr" :key="i">
      이름은 {{item.name}}이고, 나이는 {{item.age}}살이다.
      <button v-on:click.once="sumAge(item.age, $event)">add</button>
      <a href="" v-on:click.capture.prevent="sumAge(item.age, $event)">add</a>
      
      <!-- 키번호, enter, delete, esc, space, up, down, left, right ... -->
      <!-- <input v-on:keyup.enter="addText" type="text"> -->
      <input v-on:keyup.enter.exact="addText" type="text" />

      <input v-on:click.right="addText" type="text" />
      <input @click.right="addText" type="text" />
      </li>
   </ul>
   
   <p>{{text}}</p>

    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: '',
      counter: 0,
      arr: [
        {name: 'a', age: 27},
        {name: 'b', age: 28},
        {name: 'c', age: 29},
      ],
    }
  },
  methods: {
    sumAge(num, e) { // 파라미터와 이벤트객체
      this.counter += num;
      e.target.parentNode.style = 'border: 1px solid red'
      // e.preventDefault();
    },
    addText(e) {
      this.text = e.target.value;
      console.log('enter');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
