<template>
  <div id="app1">
  	<img src="../assets/logo.png" alt="" width="100">
  	<h1>{{ logo ? "ok" : 'no ok' }}---{{ logo1 }}</h1><!--logo存在为ok，不存在执行后面的no OK-->
  	<h1>{{ logo }}</h1>
  	<h1 v-text="logo"></h1>
  	<h1 v-html="logo2"></h1>
  	<input type="text" v-model="logo2">

  	<h1 v-bind:title="logo1 + '5'">{{ logo1 + '5' }}</h1>
  	<h1 :title="logo3">{{ logo + 'title不改变'}}</h1><!-- title的时间不会更新 -->
  	<h1 :title="logo3" @mouseover="showlogo3">{{ logo + 'title改变' }}</h1>

  	<!-- <input type="text" @keydown.enter="addTask" v-model="task.content"> -->
  	<input type="text" @keydown.enter="addTask" ref="addTask"><!-- keydown为键盘点击事件，keydown.enter点击Enter键，left左键，right右键-->
  	<p v-for="(item,index) in tasks" :class="{ 'finish': item.checked }">
  	  <input type="checkbox" :checked="item.checked" @click="item.checked =!item.checked">
  	  {{ item.content }}
  	  <button @click="removeTask(index)">删除</button>
  	</p>
  </div>	
</template>

<style scoped>
  #app1 {
  	display: flex;
  	flex-direction: column;/*主轴垂直对齐，为column垂直，为row水平，但是默认水平,column-reserve垂直反序*/
  	justify-content: center;/*主轴的对齐方式*/
  	align-items: center;/*副轴（90度的相对轴）的对齐方式*/
  }
  .finish {
  	text-decoration: line-through;
  }
</style>

<script>
export default {
  data () {
    return {
      logo: 'logo',
      logo1: 'logo1',
      logo2: '',
      logo3: new Date(),
      // task: {
      // 	content: '',
      // 	checked: false
      // },
      tasks: []
    }
  },
  methods: {
  	showlogo3: function () {
  		this.logo3 = new Date()
  	},
  	addTask: function (el) {
  		// if (this.task.content){
  		//   this.tasks.push(this.task)//push进去的是task的内容，task名字没有进去
  		//   this.task.content = ''
  		// } else {
  		//   return
  		// }
  		if(this.$refs.addTask.value) {
  			let task = {
  			  content: this.$refs.addTask.value,
  			  checked: false
  			}
  			this.tasks.push(task)
  			this.$refs.addTask.value = ''
  		}else {
  			return
  		}
  	},
  	removeTask: function (index) {
  		this.tasks.splice(index, 1)
  	}
  },
  watch: {//观测数据变化
    
  }
}
</script>
