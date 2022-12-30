<template>
  <div id="app" class="movie">
    <ol class="list">
      <li v-for="(item, i) in movies" :key="item.name">
        <a href="">
          <h4 class="hide">{{ item.name }}</h4>
          <span :class="['hide', 'rate', 'rate' + item.rate[0]]">{{ item.rate[1] }}</span>
          <strong class="rank">{{ i + 1 }}</strong>
          <img class="poster" :src="require(`@/assets/${item.src}`)" :alt="item.name" />
          <span class="desc">
            <i class="star"><b :style="`width: ${item.score * 10}%`"></b></i>
            <em class="score">{{ item.score }}</em>
          </span>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
// 1. 데이터 처리
// 2. v-for 디렉티브 작업
// 3. css 작업
export default {
  name: 'App',
  data() {
    return {
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
          sale: 11.7, //판매율
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
  created() {
    // 1-1. rate 정보를 "rate: [15, '15세이상 관람가']"로 만든다.
    for (let i = 0; i < this.movies.length; i++) {
      this.movies[i].rate = [this.movies[i].rate, this.rateMatch[this.movies[i].rate]];
    }

    // 1-2. movies 배열을 평점순으로 재배열한다.
    this.movies.sort((a, b) => b.score - a.score);
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
.movie ol {
	overflow: hidden;
	width: 600px;
	margin: 0 auto;
}
.movie li {
	float: left;
	position: relative;
	border: 1px solid rgba(255, 255, 255, .2);
	width: 127px;
	height: 206px;
	margin: 10px;
	box-shadow: 0 0 10px rgb(0, 0, 0 / 40%);
}
.movie li .rank {
	position: absolute;
	top: 5px;
	left: 5px;
	font-size: 24px;
	font-style: italic;
	text-shadow: 0 0 10px black;
}
.movie li .rate {
	visibility: visible;
	position: absolute;
	top: 5px;
	right: 5px;
	width: 25px;
	height: 25px;
	background-image: url(./assets/images/icon_rate.png);
}
.movie li .rate0 {background-position: 0 0;}
.movie li .rate12 {background-position: 0 -30px;}
.movie li .rate15 {background-position: 0 -60px;}
.movie li .rate19 {background-position: 0 -120px;}
.movie li .rate20 {background-position: 0 -90px;}
.movie li .poster {vertical-align: top;}
.movie li .desc {
	position: relative;
	display: block;
	width: 100%;
	height: 25px;
}
.movie li .desc > .star {
	position: absolute;
	top: 5px;
	left: 10px;
	width: 71px;
	height: 14px;
	background: url(./assets/images/icon_star.png) no-repeat 0 0/71px auto;
}
.movie li .desc > .star > b {
	display: block;
	height: 14px;
	background: url(./assets/images/icon_star.png) no-repeat 0 -15px/71px auto;
}
.movie li .desc > .score {
	position: absolute;
	top: 5px;
	right: 10px;
	font-weight: bold;
}
</style>
