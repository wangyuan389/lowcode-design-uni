/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-17 15:55:29
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 10:40:40
 */
import WidgetProps from "@/types/widget.ts";
import { createId, cloneDeep } from "@/hooks/baseuse.ts";

/**
 * 解析物料Schema，初始化对应物料默认配置值
 * @param schema
 */
function initWidgetDefaulValue(schema: any) {
  let { componentName, title, npm, props } = schema;
  let defaultValue = { id: createId(8), componentName, title, npm };

  setWidgetDefaulValue(props, defaultValue);

  return defaultValue;
}

/**
 * 递归 schems props
 * @param props
 * @param temp
 */
function setWidgetDefaulValue(props: WidgetProps[], temp: any) {
  props.forEach((prop: WidgetProps) => {
    let { name, type, defaultValue, children } = prop;
    temp[name] = defaultValue;
  });
}

export { initWidgetDefaulValue };
