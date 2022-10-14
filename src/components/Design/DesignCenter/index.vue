<!--
 * @Description: 可视化构建面板
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:14:20
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 17:01:34
-->
<template>
  <div class="design-center">
    <DesignCenterShell>
      <WidgetList :widgets="curWidgetList" />
    </DesignCenterShell>
  </div>
</template>

<script setup lang='ts'>
import { ref, toRefs, reactive, computed } from "vue";
import WidgetList from "./WidgetList.vue";
import { useDesignStore } from "@/store/design.ts";
import DesignCenterShell from "./DesignCenterShell.vue";

const { curWidgetList } = useDesignStore();
</script>

<style lang="scss" scoped>
.design-center {
  overflow: auto;
  flex: 1;
}
</style>
