<template>
  <div>
     <h1>访问Vuex中的数据 -- 01页面</h1>
     <p>姓名:{{username}}</p>
     <p>性别:{{sex ? '男' : '女'}}</p>
     <p>年龄:{{age}}</p>
     <p>工资:{{salary}}</p>
     <p>其他:{{extension}}</p>
     <hr>
     <h2>仓库中共有{{productNum}}件商品，它们是:</h2>
     <p v-for="(product,index) of products" :key="index">
       商品ID:{{index+1}},
       商品名称:{{product.productName}},
       商品售价:{{product.salePrice}}
     </p>
  </div>
</template>
<script>
//导入mapState()和mapGetters()辅助函数
import {mapState,mapGetters} from 'vuex';
export default {
  //计算属性(此时会将Vuex中的state作为当前页面组件的计算属性来使用)
  computed:{
    ...mapState([
      'username',
      'age',
      'sex',
      'salary',
      'products'
    ]),
    ...mapState({
      extension:'extends'
    }),
    //以数组形式访问getters
    //...mapGetters(['getCounts'])
    //以对象形式访问getters
    ...mapGetters({
      productNum:'getCounts'
    })
  },
   
  mounted(){
    console.log(this.username);
    console.log(this.age);
    console.log(this.sex);
    console.log(this.salary);
  }
}
</script>