<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-13 16:57:06
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-13 16:59:44
-->
<template>
  <div>
    <img class="img" :src="url" />
  </div>
</template>

<script setup lang='ts'>
import { ref, toRefs, reactive, computed } from "vue";

let url = ref(
  "https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp"
);
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>
