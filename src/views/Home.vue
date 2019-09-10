<template>
  <div class="home">
    <button @click="todemo">DEMO</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data (){
    return {
    }
  },
  methods: {
    todemo() {
      this.$router.push({path:'/demo',query:{name: 'lll'}})
    }
  }
}
</script>
<style>
.home{
  width: 300px;
  height: 400px;
  background: #f00;
  
}
</style>