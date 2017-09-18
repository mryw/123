<template>
  <div class="aqy">
    <Aheader></Aheader>
    <!-- <Abanner></Abanner> -->
    <Bbanner jt="true" point="true" during="3000"></Bbanner>
   
    <!-- <button @click="show = !show">toggle</button> -->
    <button @click="randomSort">toggle</button>
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <transition-group name="swiper" mode="out-in" tag="p">
     <!--  <p v-if="show" :key="show">show</p>
      <p if-else :key="hide">hide</p>	 -->
      <span class="swiper_item" v-for="item in nums" :key="item">{{ item }}</span>
    </transition-group>
     <input type="text" v-focuse v-ff:focus="yy">
     <input type="text" v-focuse v-ff:click="yy">
    <!-- 显示 -->
    <!-- .swiper-enter     0%
    .swiper-enter-active     0%-100%
    .swiper-enter-to    100% -->

    <!-- 消失 -->
   <!--  .swiper-leave     
    .swiper-leave-active     
    .swiper-leave-to --> 
    <p v-for="iii in (nums | dys)">{{ iii }}</p><!--过滤器-->
    <span @click="bcsdh">编程式导航</span>
    
    <Afooter></Afooter>
  </div>
</template>

<style scoped>
	.swiper-enter-active,.swiper-leave-active,.swiper-move {
		transition: .5s;
	}
	.swiper-enter,.swiper-leave-to {
		transform: translate(50px,50px) scale(5) rotate(180deg);
		opacity: 0;
	}
	.swiper-leave-active {
		position: absolute;
	}
	.swiper_item{
		margin-left: 10px;
		display: inline-block; 
	}
</style>

<script>
import Aheader from '../common/header/header'
import Abanner from '../common/header/banner'
import Bbanner from '../common/header/banner4'
import Afooter from '../common/footer/footer'
// import rem from '../../static/rem'
import { defaultFontSize } from '../../static/rem.js'//导出rem



export default {
  mounted: function () {
    
  },
  data () {
    return {
      nums: [1, 2, 3, 4, 5, 6],
      show: true,
      lastnum: 7
    }
  },
  components: {
  	Aheader,
  	Abanner,
  	Bbanner,
  	Afooter
  },
  directives: {   //自定义指令
    focuse: function (el) {
      el.style.padding = '10px'
    },
    ff: {
      inserted: function (e, binding) {  //不做任何操作时，表单获取焦点状态
        if (binding.arg === 'focus') {
          e.focus()
        } else if (binding.arg === 'click') {
          console.log('xx')
        } 
      }
    }
  },
  filters: {   //过滤器
    dys (value) {
      return value.filter((x) =>{
        return x>3
      })
    }
  },
  methods: {
    randomSort: function () {
    	this.nums.sort(function () {
    		return Math.random() -0.5
    	})
    },
    add: function () {
    	this.nums.splice(this.randomIdex(),0,this.lastnum++)
    },
    remove: function () {
        this.nums.splice(this.randomIdex(),1)
    },
    randomIdex () {
    	return Math.floor(Math.random() * this.nums.length)
    },
    bcsdh: function () {
      this.$router.push('/ss')
      console.log(this.$route.params.id)
    }
  }
}
</script>
