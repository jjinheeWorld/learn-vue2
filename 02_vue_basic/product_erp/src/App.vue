<template>
  <div id="app">
    <h1>지역 : <span>{{ ASIA.name }}</span></h1>
    <div class="top">
      <!-- label 태그 안에 input 태그가 있을 경우, for 속성을 작성하지 않아도 됨 -->
      <label>수요 : <input type="number" v-model="ASIA.demand" min="0"></label>
      <label>가격 : <input type="number" v-model="ASIA.price" min="0"></label>
    </div>
    <div class="producers">
      <h2>생산자 수 : <span>{{ ASIA.producers.length }}</span></h2>
      <ul>
        <li v-for="item in ASIA.producers" :key="item.name">
          <strong>{{ item.name }}</strong>
          <label>단가 : <input type="number" v-model="item.cost" min="0"></label>
          <label>생산량 : <input type="number" v-model="item.production" min="0"></label>
          <label>비용 : <span>{{ item.cost * item.production }}</span></label> <!-- 비용 = 단가 * 생산량 -->
        </li>
      </ul>
    </div>
    <div class="total">
      <strong>부족분 : </strong><span>{{ shortfall }}</span> <!-- 부족분 = 수요 - 공장들의 생산량 -->
      <strong>총수익 : </strong><span>{{ profit }}</span> <!-- 순이익 = 총매출(수요 * 가격) - 공장들의 비용 -->
    </div>
  </div>
</template>

<script>
const data = {
  name: 'Asia',
  producers: [
    {name: 'Byzantium', cost: 10, production: 9},
    {name: 'Attalia', cost: 12, production: 20},
    {name: 'Sinope', cost: 10, production: 6},
  ],
  demand: 30, // 수요
  price: 20 // 가격
}

export default {
  name: 'App',
  data() {
    return {
      ASIA : '',
    }
  },
  computed: {
    shortfall() { // 부족분
      let result = this.ASIA.demand; // 수요
      this.ASIA.producers.forEach(p => { // forEach를 통해 수요에서 공장들의 생산량을 뺴준다.
        result -= p.production;
      })
      return result;
    },
    profit() { // 총수익
      let totalCost = 0; // 총비용
      this.ASIA.producers.forEach(p => { // forEach를 통해 각 공장들의 비용을 더한다.
        totalCost += p.cost * p.production; 
    })
      return (this.ASIA.demand * this.ASIA.price) - totalCost; // 총매출에서 공장들의 비용을 뺀다.
    }
  },
  created() {
    this.ASIA = data;
  }
}
</script>

<style>
.top input {width:50px; margin-right:20px;}
.producers li {padding:5px 0}
.producers li strong {display: inline-block; width:100px;}
.producers li input {width: 50px; margin-right: 20px;}
.total {margin-left:40px}
.total span {margin-right:20px;}
</style>
