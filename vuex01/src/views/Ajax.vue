<template>
  <div>
    <button @click="setVuexData()">获取异步数据添加到state中</button>
  </div>
</template>
<script>
export default {
  methods:{
    setVuexData(){
      //分发Actions
      this.$store.dispatch('getData');
    }
  }
}
</script>