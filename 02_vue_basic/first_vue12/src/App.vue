<template>
  <div id="app">
    <h2>Students List</h2>
    <button @click="changeState">확인</button>
    <ul class="list">
      <li v-for="user of users" :key="user.name">
        <div><strong>Name</strong> : {{ user.name }} <span>({{ user.username }})</span></div>
        <div><strong>City</strong> : {{ user.address.city }}, {{ user.address.zipcode }} <span>({{ user.address.geo.lat }}, {{ user.address.geo.lng }})</span></div>
        <div><strong>Street</strong> : {{ user.address.street }} <span>({{ user.address.zipcode }})</span></div>
        <div><strong>E-mail</strong> : <a :href="'mailto:' + user.email">{{ user.email }}</a></div>
        <div><strong>Phone</strong> : {{ user.phone }} </div>
      </li>
    </ul>
    
    <h2>Students Posts</h2>
    <!-- ref란 vue에서 컴포넌트 또는 DOM에 접근하기 위해 사용하는 속성 -->
    <ul class="list" ref="posts">
      <li v-for="post of posts" :key="post.id">
        <div><strong>Title</strong> : {{ post.title }}</div>
        <div><strong>Body</strong> : {{ post.body }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: '',
      posts: '',
      state: 'yet',
    }
  },
  watch: {
    state(after, before) {
      // after는 바뀐 내용, before는 바뀌기 전 내용을 알려준다. 
      console.log(`change!!! ${before} ➡️ ${after}`);
    }
  },
  // state라는 데이터에 watch 속성을 지정한 코드
  // state의 데이터가 변할 때마다 watch 속성에 정의한 state 함수가 실행되면서 콘솔에 변한 데이터를 출력  
  methods: {
    changeState() {
      if (this.state === 'yet') this.state = 'done';
      else this.state = 'yet';
    }
  },
  created() { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
        .then(users => {this.users = users});

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
        .then(posts => {this.posts = posts});
  },
  mounted() {
    this.$refs.posts.style.border = '2px solid red';
  }
}
</script>

<style>
* {margin: 0; padding: 0;}
body {padding: 30px;}
li {list-style: none;}
h2 {
  color: rgb(5, 65, 168);
  font-size: 32px;
}
.list > li {
  background-color: #e4e4e4;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}
.list > li > div {
  margin: 8px 0;
}
.list > li strong {
  display: inline-block;
  width: 50px;
}
.list > li  span {
  font-size: 12px;
  color: #999;
}
</style>
