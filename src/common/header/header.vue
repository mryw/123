<template>
<div id="header">
  <div class="headertop">
    <div class="header_01">
      <img src="../../assets/logo108x35_black.png" width="110">
    	<span>·</span> 电影
      <!-- <span class="header_02">导航<span>{{ navClick ? '▲ ':'▼' }}</span></span> -->
      <span class="header_02" @click="navClick = !navClick">
      	<span class="header_03"></span>
      </span>
      <img src="">
    </div>
      <div class="search">
        <input type="text" name=""><button></button>
      </div>
      <ul>
    	  <li v-for="navitem in navs" :key="navitem.content" @click="navitem.checked= !navitem.checked" :class="{ 'navitem_on': navitem.checked }">
    		{{ navitem.content }}
    	    <div v-if="navitem.checked == true">ss</div>
    	 </li>
     </ul>
  </div>  
</div>
</template>

<style scoped>
  #header{
  	width: 100%;
  	height: 45px;
  	background: #292929;
  }
  .headertop{
  	width: 90%;
  	height: 45px;
  	margin: 0 auto;
  	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #292929;
  }
  .header_01{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #5aa700;
    font-size: 20px;
    font-family: "\5FAE\8F6F\96C5\9ED1","\5B8B\4F53",Arial,Helvetica,sans-serif;
  }
  .header_01>span{
  	color: #ddd;
  	font-size: 30px;
  	margin: 0 5px;
  }
  .header_02{
  	display: inline-block;
  	padding-top: 3px;
  	width: 87px;
  	height: 35px;
  }
  .header_03{
  	display: inline-block;
  	width: 87px;
  	height: 33px;
  	background: url(../../assets/navtitle_black1.png) no-repeat -3px -118px;
  }
/**************search******************************/
  .search{
  	height: 30px;
  }
  .search>input{
  	width: 350px;
  	height: 30px;
    border:0px;
    vertical-align: top;/*input的对齐*/
  	border-bottom-left-radius: 4px;
  	border-top-left-radius: 4px; 
  }
  .search>button {
  	width: 76px;
  	height: 30px;
  	border:0px;
  	border-bottom-right-radius: 4px;
  	border-top-right-radius: 4px;
  	background: url(../../assets/srch_btn_20170804.png) no-repeat 0 -40px;
  }
  ul{
  	display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: #fff;
    font-family: "\5FAE\8F6F\96C5\9ED1","\5B8B\4F53",Arial,Helvetica,sans-serif;
  }
</style>

<script>
export default {
  data () {
    return {
      navClick: false,
      navs: [
        { content: '登录', checked: false },
        { content: '注册',  checked: false },
        { content: '开通vip', checked: false },
        { content: '上传', checked: false },
        { content: '消息', checked: false },
        { content: '播放记录', checked: false }
      ]
    }
  }
}
//  awiper:function (){
// 	if(e.wheelDelta > 0){
// 		this.prev()
// 	} else {
// 		this.next()
// 	}
// }
// @mousewheel.prevent="swiper"
</script>