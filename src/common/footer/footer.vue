<template>
  <div id="footer">
  	<ul>
  	  <li v-for="item in nav"><router-link tag="span" :to="item.src">{{ item.content }}</router-link></li>
  	</ul>
  	<p>Copyright © 2017 爱奇艺 All Rights Reserved</p>
  </div>
</template>

<style scoped>
  #footer {
    padding:20px 0;
    text-align: center;
    font-size: 12px;
    color: #333;
  }
  ul li {
  	 display: inline-block;
  	 padding: 0 12px;
  	 border-right:1px solid #333;
  	 cursor: pointer;
  }
  /*ul li:after {
    content: '';
   
  }*/
  ul li:last-child {
  	border-right: 0;
  }
</style>

<script>
export default {
  data () {
    return {
      nav: [
        { content: '公司介绍', src: '#' },
        { content: '公司产品', src: '#' },
        { content: '新闻动态', src: '#' },
        { content: '人才招聘', src: '#' },
        { content: '开放平台', src: '#' },
        { content: '爱奇艺认证', src: '#' },
        { content: '公司介绍', src: '#' },
        { content: '公司介绍', src: '#' },
        { content: '公司介绍', src: '#' }
        
      ]
    }
  }
}
</script>