<!--
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-17 10:11:41
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 10:31:18
-->
<template>
  <div ref="shapeRef" class="shape" @click.stop="setCurWidget(props.widget)">
    <!-- 选中物料高亮 -->
    <div :class="curWidget?.id == props.widget?.id ? 'shape-active' : ''"></div>

    <!-- 物料工具栏 -->
    <div class="shape-tool" :style="{ right: getRightLocation() }">
      {{ props.widget?.title }}
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, defineProps, computed } from "vue";
import { useDesignStore } from "@/store/design.ts";

const props = defineProps({
  widget: {},
});

const { curWidget } = toRefs(useDesignStore());
const { setCurWidget } = useDesignStore();
const shapeRef = ref<HTMLElement | null>(null);

// 工具栏右移位置 , 与页面纵向对齐
function getRightLocation() {
  const shapeRect = shapeRef?.value?.getBoundingClientRect();
  const toolWitth = 85;

  if (shapeRect) {
    let right = -((375 - shapeRect.width) / 2 + toolWitth);
    return `${right}px`;
  }

  return 0;
}
</script>

<style lang="scss" scoped>
@import "../../../style/variable";
.shape {
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: dashed 1px $theme-color;
    z-index: 100;
    pointer-events: none;
  }

  .shape-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 1px $theme-color;
    z-index: 100;
    pointer-events: none;
  }

  .shape-tool {
    position: absolute;
    top: 0; /*no*/
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px; /*no*/
    height: 24px; /*no*/
    font-size: 12px; /*no*/
    color: #333;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &::after {
      content: "";
      position: absolute;
      right: 100%; /*no*/
      top: 7px; /*no*/
      width: 0; /*no*/
      height: 0; /*no*/
      border-width: 5px; /*no*/
      border-style: solid;
      border-color: transparent;
      margin-bottom: -1px; /*no*/
      border-right-width: 5px; /*no*/
      border-right-color: currentColor;
      color: #fff;
    }
  }
}
</style>
