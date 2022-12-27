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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: '',
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
        .then(users => {this.users = users});
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