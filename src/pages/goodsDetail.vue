<template lang="html">
  <div class="detail">
      <DetailHeader></DetailHeader>
      <cs :title1="title1" v-on:data="dst"></cs><!-- title1不加：titlec1只能传入字符串，不能传入变量-->
      <!--加：的title1只能传对象或者变量或数组，当需要传dd:true就要用对象{'dd':true}-->
      <!--<cs title1="ww"></cs>-->
      (../assets/image/54205424_big.jpg)
      <p class="site-title">树懒果园 泰国进口大金煌芒果{{ title1.name }}</p>
      <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
      <p v-if="show">show</p>
      <p v-else>hide</p>

       <router-link to="/msg">
        <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
      </router-link>
      <div class="show">
        <router-view></router-view>
      </div>
      <commonFooter></commonFooter>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'
import cs from '../components/cs'

export default {
  data () {
    return {
      massge: "123",
      show: true,
      title1: {
        name: '蛋蛋',
        id: 'sd'
      }
    }
  },
  components: {
    DetailHeader,
    CommonFooter,
    cs
  },
  methods: {
    dst: function (dd) {
      alert('死了' + dd)
    }
  }
}
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
</style>
