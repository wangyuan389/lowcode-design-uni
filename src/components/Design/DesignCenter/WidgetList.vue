<!--
 * @Description: 无限嵌套物料列表
 * @Autor: WangYuan1
 * @Date: 2022-10-09 19:04:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 15:29:22
-->
<template>
  <draggable
    v-model="widgets"
    :group="{ name: 'design' }"
    ghostClass="ghost"
    item-key="id"
    animation="300"
    :class="[isChild ? '' : 'page', emptyStyle]"
  >
    <template #item="{ element }">
      <WidgetShape :widget="element">
        <component :is="element.componentName" v-bind="element">
          <WidgetList :widgets="element.children" :isChild="true" />
        </component>
      </WidgetShape>
    </template>
  </draggable>
</template>


<script>
import { reactive, toRefs, computed, defineProps } from "vue";
import { useVModel } from "@vueuse/core";
import draggable from "vuedraggable";
import ImgWidget from "@/widgets/ImgWidget/ImgWidget.vue";
import WrapWidget from "@/widgets/WrapWidget/WrapWidget.vue";
import WidgetShape from "./WidgetShape.vue";
import TextWidget from "@/widgets/TextWidget/index.vue";

export default {
  components: { draggable, ImgWidget, WrapWidget, TextWidget, WidgetShape },

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      widgets: [],
    };
  },

  watch: {
    value: {
      handler(val) {
        this.widgets = val;
      },
      immediate: true,
      deep: true,
    },
    widgets: {
      handler(val) {
        this.$emit("update:value", val);
      },
      immediate: true,
      deep: true,
    },
  },

  computed: {
    emptyStyle() {
      // 物料容器
      if (!this.widgets.length) {
        // 页面容器
        if (!this.isChild) {
          return "page-empty";
        }

        return "child-empty";
      }

      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-height: 667px;
}

.page-empty {
  position: relative;
  background: url("https://file.qingflow.com/assets/empty-content/applying-editorial-tips.png?x-oss-process=image/format,webp");
  background-size: 144px 144px;
  background-repeat: no-repeat;
  background-position: 115px 200px;
  &::after {
    content: "从左侧面板拖入组件";
    position: absolute;
    top: 340px;
    left: 50%;
    transform: translateX(-50%);
    color: #8591a2;
    font-size: 10px;
  }
}
.child-empty {
  position: relative;
  min-height: 100px;
  background: #fafbfc;
  &::after {
    content: "拖拽组件到容器内";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #8591a2;
    font-size: 10px;
  }
}
</style>