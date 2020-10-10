<template>
  <div>
    <h1>修改用户的年龄</h1>
    <hr>
    <h1>年龄为:{{this.$store.state.age}}</h1>
    <button @click="inc">年龄加1</button>
    <button @click="dec">年龄减1</button>
  </div>
</template>
<script>
export default {
  methods:{
    inc(){
      //提交Mutations
      this.$store.commit('increment');
    },
    dec(){
      //提交Mutations
      this.$store.commit('decrement');
    }
  }
}
</script>