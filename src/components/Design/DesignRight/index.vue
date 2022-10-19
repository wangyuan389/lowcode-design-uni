<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:41:04
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 14:40:05
-->
<template>
  <div class="design-right">
    {{ curWidget }}
    <!-- <component :is=""></component> -->
    <TextSetter v-model="test" />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, defineProps, computed } from "vue";
import { useDesignStore } from "@/store/design.ts";

const { curWidget } = toRefs(useDesignStore());

let test = ref("test");
</script>

<style lang="scss" scoped>
.design-right {
  background: #fff;
  width: 250px;
  height: 100%;
}
</style>
