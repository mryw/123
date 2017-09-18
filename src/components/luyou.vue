<template>
  <div class="luyou">
   <router-link :to="{ name: 'Home' }" v-text="name"></router-link>
   <router-view></router-view>	
  </div>
</template>

<style scoped>
  .luyou{

  }
</style>

<script >
export default {
  name: 'luyou',
  data () {
  	return {
      name: '第二页'
	}
  }
}	

</script>
