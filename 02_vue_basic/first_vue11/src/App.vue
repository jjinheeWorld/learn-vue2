<template>
  <div id="app">
    <h2>Students List</h2>
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
    }
  },
  async created() { // created 안에서의 순서는 await로 컨트롤됨
    const res1 = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res1.json();
    this.users = users;

    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res2.json();
    this.posts = posts;
  },
  mounted() {
    // ref
    // 마운트된 요소에만 적용 가능
    // 마운트되지 않은 요소에 사용하면 ref undefined가 발생함
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
