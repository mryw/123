<template>
  <div id="xd">
    <!--<h1>{{ nav[showInfo].name }}</h1>-->
    <h1>{{ header }}</h1>
    <ul class="nav">
     <router-link tag="li" :to="item.path" v-for="(item,index) in nav" :key="item.name">{{ item.name }}</router-link>
     <!--<li v-for="(item,index) in nav" :key="item.name" @click="show(index)">{{ item.name }}</li>-->
    </ul>
    <!--<div v-for="(info,index) in infos" :key="info.content" v-if="showInfo == index">{{ info.content }}</div>-->	<!-- index代表div的index，showInfo和哪个index相同，那个就显示-->
    <router-view></router-view>
  </div>
</template>

<script>
import luyou from '../components/luyou'
  export default {
  	name: 'xd',
    data () {
      return {
        title: 'xiaozhang',
        nav: [
          {name: '首页', path: '/luyou'},
          {name: '产品', path: '/'},
          {name: '服务', path: '/'}
        ],
		infos: [
		  {content: '首页1'},
		  {content: '产品1'},
		  {content: '服务1'}
		],
		showInfo: 0
      }
  	},
  	methods: {
  	  show: function (index) {
  	  	this.showInfo = index
  	  	return 1
  	  }
  	},
  	computed: {
  		header: function () {
  			return this.$route.name
  		}
  	},
  	components: {
  		luyou
  	}
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #xd {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul li {
  	display: inline-block;
  	list-style: none;
  }
  .nav {
  	display: flex;
  	align-items: stretch;
  	height: 50px;
  }
  .nav li {
  	display: flex;
  	flex: 1;
  	justify-content: center;
  	align-items: center;
  }
  router-link-active{
  	font-size: 26px;
  }
</style>
