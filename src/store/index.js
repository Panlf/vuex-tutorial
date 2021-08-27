import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  count: 1
  },
  // 只有mutations中定义的函数，才有权利修改state中的数据
  mutations: {
	addCount(state) {
		//变更状态
		state.count++
		
		//不要在mutations函数中，执行异步操作
		//setTimeout(()->{state.count++},1000)
	},
	addN(state,step){
		state.count += step
	},
	subCount(state){
		state.count--
	},
	subNCount(state,step){
		state.count -= step
	}
  },
  actions: {
	  addAsync(context){
		  setTimeout(()=>{
			  //在actions中，不能直接修改state中的数据
			  // 必须通过context.commit()触发某个mutation才行
			  context.commit('addCount')
		  },3000)
	  },
	  subNAsync(context,step){
		  setTimeout(()=>{
			  //在actions中，不能直接修改state中的数据
			  // 必须通过context.commit()触发某个mutation才行
			  context.commit('subNCount',step)
		  },3000)
	  }
  },
  getters: {
	  showNum(state){
		  return '当前最新的数量是【'+state.count+'】'
	  }
  },
  modules: {
  }
})
