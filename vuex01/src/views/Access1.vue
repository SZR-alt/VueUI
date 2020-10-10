<template>
  <div>
     <h1>访问Vuex中的数据 -- 01页面</h1>
     <p>姓名:{{this.$store.state.username}}</p>
     <p>性别:{{this.$store.state.sex ? '男' : '女'}}</p>
     <p>年龄:{{this.$store.state.age}}</p>
     <p>工资:{{this.$store.state.salary}}</p>
     <hr>
     <h2>仓库中共有{{this.$store.getters.getCounts}}件商品，它们是:</h2>
     <p v-for="(product,index) of this.$store.state.products" :key="index">
       商品ID:{{index+1}},
       商品名称:{{product.productName}},
       商品售价:{{product.salePrice}}
     </p>
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$store.state.username);
    console.log(this.$store.state.age);
    console.log(this.$store.state.sex);
    console.log(this.$store.state.salary);
  }
}
</script>