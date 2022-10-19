<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:41:04
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 11:35:10
-->
<template>
  <div class="design-right">
    <template v-if="curWidgetSchema">
      {{ curWidget }}
      <component
        v-for="(schema, index) in curWidgetSchema.props"
        :key="index"
        :is="schema.setter.setterName"
        v-model="curWidget[schema.name]"
      ></component>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, defineProps, computed } from "vue";
import { useDesignStore } from "@/store/design.ts";

const { curWidget, curWidgetSchema } = toRefs(useDesignStore());
</script>

<style lang="scss" scoped>
.design-right {
  background: #fff;
  width: 250px;
  height: 100%;
}
</style>
