<template>
  <div>
    <h1>添加商品</h1>
    <hr>
    <p>商品名称:<input type="text" v-model="productName"></p>
    <p>商品售价:<input type="text" v-model="salePrice"></p>
    <p><button @click="add">确认添加</button></p>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
  data(){
    return {
      productName:'',
      salePrice:0
    }
  },
  methods:{
    ...mapMutations(['addProduct']),
    add(){
      //构建对象,之所以要构建如下结构的对象,是因为在Mutations
      //中payload参数要添加到products数组的未尾，而products中包含的
      //对象如下，所以为了正常的可以进行遍历输出，故构建如下结构的对象 
      let obj = {
        productName:this.productName,
        salePrice:this.salePrice
      }
      //提交Mutations      
      //this.$store.commit('addProduct',obj);
      this.addProduct(obj);
      //路由跳转
      this.$router.push('/access1');
    }
  }
}
</script>