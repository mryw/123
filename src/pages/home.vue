<template lang="html">
  <div class="container">
    <home-header></home-header>   <!--  展示引入的header组件 -->
    <div class="content">
   
      <ul class="cont-ul">
         <li><img src="../assets/defu.jpg"></li>
         <li><img src="../assets/fll.jpg"></li>
          <li><img src="../assets/defu.jpg"></li>
         <li><img src="../assets/fll.jpg"></li> <li><img src="../assets/defu.jpg"></li>
         <li><img src="../assets/fll.jpg"></li>
      </ul>
    </div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
import homeHeader from '../components/HomeHeader'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
export default {
  data () {
      return {
          items: []   /* 定义一个空数组数据items */
      }
  },
  components: {
    homeHeader,
    CommonFooter,
    List
  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      this.items = data.body.data;
      })
  }
}
</script>

<style lang="less" scoped>
  @width:100%;
  .c1(){
    float:left;
    margin:0 0.15rem 0.2rem;
  }
  .container {
    width: @width;
    margin: 0 auto;
    .content{
      margin-bottom:1.8rem;
    }
  }
  .cont-ul {
    padding: 0.5rem 0.4rem;  
    background-color: #ccc;
    li{
      overflow:hidden;
       .c1();
    }
    li img{
      width:7.3rem;
    }

  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>

