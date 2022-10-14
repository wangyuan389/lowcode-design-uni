<!--
 * @Description: 自定义物料模板列表
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:16:23
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 17:01:48
-->
<template>
  <div class="models">
    <draggable
      :group="{ name: 'design', pull: 'clone' }"
      :sort="false"
      v-model="models"
      :clone="cloneWidgetModel"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="models-item">
          <i class="icon" :class="element.icon"></i>
          <span>{{ element.name }}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useDesignStore } from "@/store/design.ts";

const { cloneWidgetModel } = useDesignStore();

const models: any[] = ref([
  { id: 1, name: "图片", component: "ImgWidget" },
  { id: 2, name: "容器", component: "WrapWidget" },
]);
</script>

<style lang="scss" scoped>
.models {
  background: #fff;

  .models-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
    margin-bottom: 8px;
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    cursor: pointer;

    i {
      font-size: 29px;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    &:hover {
      color: #fff;
      background: #155bd4;
    }
  }
}

.ghost {
  position: relative;
  width: 100%;
  height: 40px; /*no*/

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5487df;
    z-index: 10000;
  }

  &::after {
    content: "组件放置区域";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 30px;
    line-height: 30px;
    background: #5487df;
    font-size: 12px /*no*/;
    color: #fff;
    text-align: center;
    pointer-events: none;
    z-index: 100001;
  }
}
</style>
