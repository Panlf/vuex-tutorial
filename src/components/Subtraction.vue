<template>
	<div>
		<!--<h3>当前最新的count值为：{{count}}</h3>-->
		<h3>{{showNum}}</h3>
		<button @click="btnHandler1">-1</button>
		<!-- 定义完mapMutations，可以直接调用函数 -->
		<button @click="subCount">-1_Street</button>
		<button @click="btnHandler2">-N_Async</button>
	</div>
</template>

<script>
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
	
	export default {
		data(){
			return {}
		},
		computed:{
			...mapState(['count']),
			...mapGetters(['showNum'])
		},
		methods:{
			...mapMutations(['subCount']),
			...mapActions(['subNAsync']),
			btnHandler1(){
				this.subCount()
			},
			btnHandler2(){
				this.subNAsync(4)
			}
		}
	}
</script>

<style>
</style>
