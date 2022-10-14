<!--
 * @Description: 设计工作台
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:26:46
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-13 20:28:21
-->
<template>
 <div class="page">
   <Header></Header>

   <div class="page-content">
     <Design />
   </div>
 </div>
</template>

<script setup lang='ts'>
import Header from "@/components/Header/index.vue";
import Design from "@/components/Design/index.vue";
</script>

<style lang="scss" scoped>
.page {
 background: #f7f8fa;
 height: 100vh;

 .page-content {
   height: calc(100% - 66px);
   margin-top: 10px;
 }
}
</style>
