<template>
	<div>
		<!-- <h3>当前最新的count值为：{{this.$store.state.count}}</h3> -->
		
		<h3>{{ this.$store.getters.showNum }}</h3>
		<button @click="btnHandler1">+1</button>
		<button @click="btnHandler2">+N</button>
		<button @click="btnHandler3">+1_Async</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		methods:{
			btnHandler1(){
				this.$store.commit('addCount')
			},
			btnHandler2(){
				this.$store.commit('addN',3)
			},
			btnHandler3(){
				this.$store.dispatch('addAsync')
			}
		}
	}
</script>

<style>
</style>
