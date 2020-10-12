import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
	//物品
	state: {
		username: 'Rose',
		age: 23,
		//true表示男,false表示女
		sex: false,
		salary: 12965.75,
		products: [
			{
				productName: 'SHARP夏普超大屏120英寸液晶电视PN',
				salePrice: 899999.00
			},
			{
				productName: 'ViH商用智慧语音投屏平板大屏幕电视超',
				salePrice: 599999.00
			},
			{
				productName: '100英寸4K智能会议平板120英寸85英寸高清教育电视机',
				salePrice: 347999.00
			},
			{
				productName: 'VIH 4K高清85 英寸液晶防爆电视机80',
				salePrice: 329999.00
			}
		]
	},
	//记账员 -- getters认为是store的计算属性 
	getters: {
		//统计仓库中商品的数量,state可以替换为任意的合法名称
		//但无论换成什么名称,其都代表当前store中的所有state
		getCounts(state) {
			return state.products.length;
		}
	},
	//搬运工
	mutations: {
		increment(state) {
			state.age++;
		},
		decrement(state) {
			state.age--;
		},
		addProduct(state,payload){
			state.products.push(payload);
		}
	},
	//拉货的汽车
	actions: {
		//发送异步的请求到WEB服务器
		getData(aaa){		
			axios.get('http://127.0.0.1:3000/vuex').then(res=>{
				//获取到服务器返回的数据
				let results = res.data.results;
				//通知搬运工将数据放置到state中去
				for(let n = 0;n<results.length;n++){
					aaa.commit('addProduct',results[n]);
				}
			});
		}
	},
	modules: {
	}
})
