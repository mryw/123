<template>
  <div class="hr" @click="dawo">{{ title1.name }}</div>
  <!--<div class="hr">{{ title1 }}</div>-->
</template>

<style>
	
</style>

<script>
export default {
  name: 'hr',
  props: ['title1'],  
  data () {
  	return {
  	  title: 'chengong'
  	}
  },
  methods: {
  	dawo: function () {
  	  this.$emit('data', '好了')//好了 是要传的参数
  	}
  }
}
</script>