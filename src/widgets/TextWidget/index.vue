<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-17 15:48:14
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 11:46:41
-->
<template>
  <div class="text">{{ props.text }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, defineProps, computed } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.text {
  padding: 10px 0;
}
</style>
