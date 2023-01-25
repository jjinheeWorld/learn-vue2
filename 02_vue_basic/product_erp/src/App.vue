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
          <label>비용 : <span>{{ item.productionCost }}</span></label> <!-- 비용 = 단가 * 생산량 -->
        </li>
      </ul>
      <div class="add">
        <strong><label><input type="text" ref="name" placeholder="생산자 이름"></label></strong>
        <label>단가 : <input type="number" ref="cost" value="0" min="0"></label>
        <label>생산량 : <input type="number" ref="production" value="0" min="0"></label>
        <button @click="add">등록</button>
      </div>
    </div>
    <div class="total">
      <strong>부족분 : </strong><span>{{ ASIA.shortfall }}</span> <!-- 부족분 = 수요 - 공장들의 생산량 -->
      <strong>총수익 : </strong><span>{{ ASIA.profit }}</span> <!-- 순이익 = 총매출(수요 * 가격) - 공장들의 비용 -->
    </div>
  </div>
</template>

<script>
import { sampleData, province } from './erp/erp.js'

const data = province(sampleData);

export default {
  name: 'App',
  data() {
    return {
      ASIA : '',
    }
  },
  methods: {
    add() {
      this.ASIA.addProducer({
        name: this.$refs.name.value,
        cost: this.$refs.cost.value,
        production: this.$refs.production.value,
      })
      // 등록 버튼 클릭 후, 초기화
      this.$refs.name.value = '';
      this.$refs.cost.value = 0;
      this.$refs.production.value = 0;
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
.add {padding:0 0 20px 40px}
.add input[type="text"] { width:70px; margin-right: 22px;}
.add input[type="number"] { width:50px; margin-right: 20px;}
</style>
