<template>
  <div class="banner" @mousewheel="swiper">
    <!-- 轮播图 -->
    <div class="banner_c"@mouseout="bannerLB" @mouseover="clearAuto">
      <!-- 左箭头 -->
      <span class="prev" @click="prev" v-if="jt">〈</span>

        <transition-group :name="clickFX" tag="ul">
          <li v-for="(bannerItem,index) in bannerss" v-if="index == curBanner" :key="bannerItem"><img :width="'100%'" :src="bannerItem"></li>
          <img width="100%" key="xxx" :src="bannerss[0]" style="opacity:0;">
            
        </transition-group>
      <div class="points" v-if="point">
        <span @mouseover="showImg(item)" class="point" v-for="item in banners.length" :class="{ 'on' : curBanner==item - 1 }"></span>
      </div>

      <!-- 右箭头 -->
      <span class="next" @click="next" v-if="jt">〉</span>
    </div>
    
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  [v-cloak]{
    display: none;
  }
  .banner_c{
    overflow: hidden;
    position: relative;
  }
  .banner_c:hover span {
   /* display: none;*/
   opacity: 0;
  }
  .banner_c ul {
    /*transition:all .5s;*/
    /*height: 200px;*/
  }
  .banner_c ul li{
    display: inline-block;
    position: absolute;
    z-index: 1;
  }
  .points{
    position: absolute;
    bottom: 5%;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
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
    z-index: 2;
    opacity: 0;
    transition: .5s;
  }
  .prev{
    left: 3%;
  }
  .next{
    right: 3%;
  }
  .swipers-enter-active, .swipers-leave-active,.swipers1-enter-active, .swipers1-leave-active {
    transition: all 1s;
  }
  .swipers-leave-active,.swipers1-leave-active{
    position: absolute;
  }
  .swipers-enter{
    transform: translate(100%);
  }
  .swipers-leave-to{
    transform: translate(-100%);
    opacity: .1;
  }
  .swipers1-enter{
    transform: translate(-100%);
  }
  .swipers1-leave-to{
    transform: translate(100%);
    opacity: .1;
  }
</style>
  
<script>
export default {
  props: ['bannersx', 'jt', 'point', 'during'],
  mounted: function () {
   
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
      autoPlay: '',
      clickFX: 'swipers'
    }
  },
  computed: {
    bannerss: function () {
      let arr = []
      console.log(this.bannersx)
      if (this.bannersx) {
        arr = this.bannersx.map(function (val) {
          let index = val.lastIndexOf('/')
          return '/static/img/' + val.slice(index)
        })
      }
      return arr.length > 0 ? arr : this.banners
    }
  },
  directive: {
    'x': function (el) {
    }
  },
  methods: {
    // bannerssx: function () {
    //   let arr = []
    //   console.log(this.bannersx)
    //   if (this.bannersx) {
    //     arr = this.bannersx.map(function (val) {
    //       val = '@/assets/movie_index/banner03.jpg'
    //       return require(`${val}`)
    //     })
    //   }
    //   console.log(arr)
    // },
    prev: function () {
      this.clickFX = 'swipers1'
      if (this.curBanner > 0) this.curBanner--
      else {
        this.curBanner = this.banners.length - 1
      }
    },
    next: function () {
      this.clickFX = 'swipers'
      if (this.curBanner < this.banners.length - 1) this.curBanner++
      else {
        this.curBanner = 0
      }
    },
    showImg: function (item) {
      this.clickFX = item - 1 > this.curBanner ? 'swipers' : 'swipers1'
      this.curBanner = item - 1
    },
    bannerLB: function () {
      let that = this
      let time = this.during || 2000
      that.autoPlay = setInterval(that.next, time)
    },
    clearAuto: function () {
      let that = this
      clearInterval(that.autoPlay)
    },
    swiper: function (e) {
      e.preventDefault()
      if (e.wheelDelta > 0) {
        this.prev()
      } else {
        this.next()
      }
    }
  }
}
</script>