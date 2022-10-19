<!--
 * @Description: 文本控件
 * @Autor: WangYuan1
 * @Date: 2022-10-18 10:45:43
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 11:44:16
-->
<template>
  <div class="test-setter">
    <el-input v-model="model" placeholder="Please input" />
  </div>
</template>

<script setup lang='ts'>
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: String,
  },
});

// v-model 配置
const emit = defineEmits(["update:modelValue"]);
const model = useVModel(props, "modelValue", emit);
</script>

<style lang="scss" scoped>
</style>
