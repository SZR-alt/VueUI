<template>
  <div>
    <button @click="setVuexData()">获取异步数据添加到state中</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions(['getData']),
    setVuexData(){
      //分发Actions
      //this.$store.dispatch('getData');
      this.getData();
      this.$router.push('/access1');
    }
  }
}
</script>