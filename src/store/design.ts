/*
 * @Description: 
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:57:45
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 15:15:35
 */
import { defineStore } from "pinia";
import { createId, cloneDeep } from "@/hooks/baseuse.ts";

interface DesignState {}

export const useDesignStore = defineStore({
  id: "app-design",

  state: (): DesignState => {
    return {
      project: null, // 活动项目
      curPage: null, // 当前页面
      curWidgetList: [], // 当前物料列表
      curWidget: null, // 当前选中物料
    };
  },

  actions: {
    // 拖拽物料，拷贝物料模板，在面板生成物料
    cloneWidgetModel(model: any) {
      return {
        ...cloneDeep(model),
        id: createId(8),
      };
    },
  },
});
