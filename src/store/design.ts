/*
 * @Description:
 * @Autor: WangYuan1
 * @Date: 2022-10-08 15:57:45
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 15:28:59
 */
import { defineStore } from "pinia";
import { createId, cloneDeep } from "@/hooks/baseuse.ts";
import { initWidgetDefaulValue } from "@/hooks/widget.ts";

interface DesignState {}

export const useDesignStore = defineStore({
  id: "app-design",

  state: (): DesignState => {
    return {
      project: null, // 活动项目
      curPage: null, // 当前页面
      curWidgetList: [], // 当前物料列表
      curWidget: null, // 当前选中物料
      widgetSchemas: [], // 所有远程物料Schema
      widgetSchemaDefaultValues: [], //根据所有远程物料Schema,解析物料配置默认值
    };
  },

  getters: {
    // 定义的 getters，第一个参数就是该容器的 state
    curWidgetSchema(state) {
      if (state.widgetSchemas.length && state.curWidget) {
        return state.widgetSchemas.find(
          (schema) => schema.componentName == state.curWidget.componentName
        );
      }

      return null;
    },
  },

  actions: {
    // 拖拽物料，拷贝物料模板，在面板生成物料
    cloneWidgetModel(schema: any) {
      return initWidgetDefaulValue(schema);
    },

    // 设置当前物料
    setCurWidget(target: any) {
      this.curWidget = target;
    },

    // 设置所有物料schemas
    setWidgetSchemas(schemas: any[]) {
      this.widgetSchemas = schemas;
    },

    // 查找对应物料schema
    findWidgetSchemas(componentName: String) {
      this.widgetSchemas.find(
        (schema) => schema.componentName == componentName
      );
    },
  },
});
