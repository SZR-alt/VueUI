<template>
  <div>
     <h1>访问Vuex中的数据 -- 01页面</h1>
     <p>姓名:{{this.$store.state.username}}</p>
     <p>性别:{{this.$store.state.sex ? '男' : '女'}}</p>
     <p>年龄:{{this.$store.state.age}}</p>
     <p>工资:{{this.$store.state.salary}}</p>
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