<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header" >
        <div @click="gotoInfo">
            router
        </div>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import router from '../router'

const gotoInfo = ()=>{
    router.push({path:"info"})
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header{
    height:100px;
    width:100%;
    /* background-color: #fff; */
}
.main{
    flex:1
}
</style>
