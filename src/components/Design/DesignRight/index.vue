<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:41:04
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-17 14:21:06
-->
<template>
  <div class="design-right">
    {{curWidget}}
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, defineProps, computed } from "vue";
import { useDesignStore } from "@/store/design.ts";

const { curWidget } = toRefs(useDesignStore());

</script>

<style lang="scss" scoped>
.design-right {
  background: #fff;
  width: 250px;
  height: 100%;
}
</style>
