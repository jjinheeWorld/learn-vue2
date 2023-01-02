<template>
  <div id="app" class="movie">
    <ul class="tab" ref="tab" @click.prevent="setContext">
      <li><a href="">예매순</a></li>
      <li><a href="">평점순</a></li>
      <li><a href="">개봉일순</a></li>
      <li><a href="">주말관객순</a></li>
      <li><a href="">다운로드순</a></li>
    </ul>
    <ol class="list">
      <li v-for="(item, i) in movies" :key="item.name">
        <a href="">
          <h4 class="hide">{{ item.name }}</h4>
          <span :class="['hide', 'rate', 'rate' + item.rate[0]]">{{ item.rate[1] }}</span>
          <strong class="rank">{{ i + 1 }}</strong>
          <img class="poster" :src="require(`@/assets/${item.src}`)" :alt="item.name" />
          <span class="desc" v-if="movContext === '예매순'">
            <i class="reserv title">예매율</i>
            <em class="reserv data">{{ item.ticketing }}%</em>
          </span>
          <span class="desc" v-else-if="movContext === '평점순'">
            <i class="star title"><b :style="`width: ${item.score * 10}%`"></b></i>
            <em class="score data">{{ item.score }}</em>
          </span>
          <span class="desc" v-else-if="movContext === '개봉일순'">
            <em class="open data">{{ item.openDate }} <b>개봉</b></em>
          </span>
          <span class="desc" v-else-if="movContext === '주말관객순'">
            <i class="week title">주말관객</i>
            <em class="week data">{{ item.week }} 명</em>
          </span>
          <span class="desc" v-else>
            <i class="sale title">판매율</i>
            <em class="sale data">{{ item.sale }} %</em>
          </span>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
// 1. tab의 상태 값을 movContext로 한다.
// 2. watch로 movContext를 감시한다.
// 3. 상태에 맞는 소팅을 한다.
// 4. 상태에 맞는 마크업을 디렉티브한다.
// 5. 상태에 맞는 tab에 .on을 준다.

// #1 .on주기 (setCrrTab)
// #2. 감시자 (watch)
// #3. 상태바꾸기 (setContext)
// #4. 소팅하기 (setOrder)
export default {
  name: 'App',
  data() {
    return {
      movContext: '예매순',
      rateMatch: {
        0: '전체관람가',
        12: '12세이상 관람가',
        15: '15세이상 관람가',
        19: '19세이상 관람가',
        20: '청소년관람불가',
      },
      movies: [
        {
          name: '남애의 여름밤',
          src: 'images/mov_1.jpg',
          rate: 15,
          score: 9.43, //평점
          sale: 11.7, //다운로드
          openDate: 8.26, //개봉일
          ticketing: 11.79, //예매율
          week: 8777, //주말관객
        },
        {
          name: '시크릿 가든',
          src: 'images/mov_2.jpg',
          rate: 0,
          score: 8.13,
          sale: 7.7, //판매율
          openDate: 9.3, //개봉일
          ticketing: 20.66,
          week: 2000,
        },
        {
          name: '반도',
          src: 'images/mov_3.jpg',
          rate: 15,
          score: 8.54,
          sale: 7.7,
          openDate: 9.3,
          ticketing: 9.79,
          week: 23327,
        },
        {
          name: '강철비2',
          src: 'images/mov_4.jpg',
          rate: 19,
          score: 7.43,
          sale: 7.7,
          openDate: 9.7,
          ticketing: 8.6,
          week: 23421,
        },
        {
          name: '신혼여행 허리케인',
          src: 'images/mov_5.jpg',
          rate: 12,
          score: 6.2,
          sale: 10.7,
          openDate: 8.17,
          ticketing: 2.11,
          week: 3213,
        },
        {
          name: '테넷',
          src: 'images/mov_6.jpg',
          rate: 19,
          score: 7.12,
          sale: 9.11,
          openDate: 11.17,
          ticketing: 3.21,
          week: 3213,
        },
        {
          name: '오케이 마담',
          src: 'images/mov_7.jpg',
          rate: 20,
          score: 9.43,
          sale: 9.11,
          openDate: 9.1,
          ticketing: 3.79,
          week: 2277,
        },
        {
          name: '다만 악에서 구하소서',
          src: 'images/mov_8.jpg',
          rate: 20,
          score: 8.9,
          sale: 8.8,
          openDate: 8.21,
          ticketing: 12.79,
          week: 83777,
        },  
      ]
    }
  },
  watch: {
    movContext(crr) {
      switch(crr) {
        case '예매순' : this.setOrder('ticketing'); break; 
        case '평점순' : this.setOrder('score'); break; 
        case '개봉일순' : this.setOrder('openDate'); break;
        case '주말관객순' : this.setOrder('week'); break;
        case '다운로드순' : this.setOrder('sale'); break;
        default : this.setOrder('ticketing');
      }
    }
  },
  methods: {
    setOrder(cxt) {
      this.movies.sort((a, b) => b[cxt] - a[cxt]);
    },
    setCrrTab(crr) {
      this.$refs.tab.querySelectorAll('li').forEach(item => {
        item.classList.remove('on');
      })
      crr.classList.add('on');
    },
    setContext(e) {
      if (e.target.tagName !== 'A') return; // a태그에만 이벤트가 발생하도록 설정
      this.movContext = e.target.textContent;
      this.setCrrTab(e.target.parentNode)
    }
  },
  created() {
    // 1-1. rate 정보를 "rate: [15, '15세이상 관람가']"로 만든다.
    for (let i = 0; i < this.movies.length; i++) {
      this.movies[i].rate = [this.movies[i].rate, this.rateMatch[this.movies[i].rate]];
    }

    // 1-2. movies 배열을 평점순으로 재배열한다.
    this.movies.sort((a, b) => b.score - a.score);
  },
  mounted() {
    this.$refs.tab.querySelectorAll('li').forEach(item => {
      if (item.firstChild.textContent === this.movContext) {
        this.setCrrTab(item);
      }
    })
  }
}
</script>

<style>
/* reset */
body {
	font:normal 12px Arial, sans-serif;
	line-height:1.3;
	color:#666666;
	background-color:#242424;
	margin:0;
	padding:0;
}
h1, h2, h3, h4, h5, h6 {font-size:1em;}
h1, h2, h3, h4, h5, h6, div, p, dl, dt, dd, ul, ol, li, form, fieldset, blockquote, address, table, thead, tbody, tfoot, tr, td, caption {
	margin:0;
	padding:0;
}
li {list-style:none;}
a {text-decoration:none; color:white}
.hide {
	visibility: hidden;
	position: absolute;
	width: 0;
	height: 0;
	font-size: 0;
}

/* movie */
.movie {margin-top: 70px;}
.movie .tab {text-align: center;}
.movie .tab > li {
  display: inline-block;
  font-size: 16px;
  margin: 0 20px;
}
.movie .tab > li.on > a {color: red;}
.movie ol {
	overflow: hidden;
	width: 600px;
	margin: 0 auto;
}
.movie .list li {
	float: left;
	position: relative;
	border: 1px solid rgba(255, 255, 255, .2);
	width: 127px;
	height: 206px;
	margin: 10px;
	box-shadow: 0 0 10px rgb(0, 0, 0 / 40%);
}
.movie .list li .rank {
	position: absolute;
	top: 5px;
	left: 5px;
	font-size: 24px;
	font-style: italic;
	text-shadow: 0 0 10px black;
}
.movie .list li .rate {
	visibility: visible;
	position: absolute;
	top: 5px;
	right: 5px;
	width: 25px;
	height: 25px;
	background-image: url(./assets/images/icon_rate.png);
}
.movie .list li .rate0 {background-position: 0 0;}
.movie .list li .rate12 {background-position: 0 -30px;}
.movie .list li .rate15 {background-position: 0 -60px;}
.movie .list li .rate19 {background-position: 0 -120px;}
.movie .list li .rate20 {background-position: 0 -90px;}
.movie .list li .poster {vertical-align: top;}
.movie .list li .desc {
	position: relative;
	display: block;
	width: 100%;
	height: 25px;
  color: white;
}
.movie .list li .desc > .title {
	position: absolute;
	top: 5px;
	left: 10px;
  font-style: normal;
  font-weight: bold;
}
.movie .list li .desc > .data {
	position: absolute;
	top: 5px;
	right: 10px;
  font-style: normal;
	font-weight: bold;
  color: red;
}
/* 평점순 */
.movie .list li .desc > .star {
	width: 71px;
	height: 14px;
	background: url(./assets/images/icon_star.png) no-repeat 0 0/71px auto;
}
.movie .list li .desc > .star > b {
	display: block;
	height: 14px;
	background: url(./assets/images/icon_star.png) no-repeat 0 -15px/71px auto;
}
.movie .list li .desc > .star.data {
  color: white;
}
.movie .list li .desc > .open.data > b {
  color: white;
}
</style>
