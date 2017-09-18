<template>
  <div class="banner" @mousewheel="swiper">
    <!--轮播图 -->
    <div class="banner_c" @mouseout="bannerLB" @mouseover="clearAuto">
      <!-- 左箭头 -->
      <span class="prev" @click="prev">〈</span>

      <ul :style="{ 'width' : 100 * banners.length + '%', 'marginLeft':-curBanner * 100 + '%'}">
	      	
	        <li :style="{ 'width' : 100 / banners.length + '%'}" v-for="bannerItem in bannerss"><img :width="'100%'" :src="bannerItem" alt=""></li>
	     
      </ul>
      <div class="points">
        <span @mouseover="showImg(item)" class="point" v-for="item in banners.length" :class="{ 'on' : curBanner==item - 1 }"></span>
      </div>

      <!-- 右箭头 -->
      <span class="next" @click="next">〉</span>
    </div>
    
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .banner_c{
    overflow: hidden;
    position: relative;
  }
 /* .banner_c ul {
    transition:all .5s;
  }*/
  .banner_c ul li{
    display: inline-block;
  }
  .points{
    position: absolute;
    bottom: 5%;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  .points .point{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition:all .5s;
  }
  .points .point.on{
    background: #ff0;
  }
  .prev,.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 40px;
    cursor: pointer;
  }
  .prev{
    left: 3%;
  }
  .next{
    right: 3%;
  }
</style>
  
<script>
export default {
  props: ['bannersx'],
  created: function () {
    this.bannerLB()
  },
  data () {
    return {
      bannerWidth: '',
      banners: [
        require('../../assets/banner01 (1).jpg'),
        require('../../assets/banner01 (2).jpg'),
        require('../../assets/banner01 (3).jpg'),
        require('../../assets/banner01 (4).jpg'),
        require('../../assets/banner01 (5).jpg')
      ],
      curBanner: 0,
      autoPlay: ''
    }
  },
  computed: {
    bannerss: function () {
      this.banners.sort(function () {
        return Math.random() - 0.5//随机排序banners
      })
      return this.banners
    }
  },
  methods: {
    prev: function () {
      if (this.curBanner > 0) this.curBanner--
      else {
        this.curBanner = this.banners.length - 1
      }
    },
    next: function () {
      if (this.curBanner < this.banners.length - 1) this.curBanner++
      else {
        this.curBanner = 0
      }
    },
    showImg: function (item) {
      this.curBanner = item - 1
    },
    bannerLB: function () {
      let that = this
      that.autoPlay = setInterval(that.next, 2000)
    },
    clearAuto: function () {
      let that = this
      clearInterval(that.autoPlay)
    },
    swiper: function (e) {
      e.preventDefault()//防止滚轮影响到别的元素
      console.log(document.body)
      if (e.wheelDelta > 0) {
        this.prev()
      } else {
        this.next()
      }
    }
  }
}
</script>