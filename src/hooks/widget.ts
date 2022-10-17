/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-17 15:55:29
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-17 16:28:32
 */
import WidgetProps from "@/types/widget.ts";
import 

function getWidgetSchemas() {

}

/**
 * 解析物料Schema，初始化对应物料默认配置值
 * @param schema
 */
function initWidgetDefaulValue(schema: any) {
  let { componentName, title, npm, props } = schema;
  let temp = { componentName, title, npm };

  setWidgetDefaulValue(props, temp);

  return temp;
}

function setWidgetDefaulValue(props: WidgetProps[], temp: any) {
  props.forEach((prop: WidgetProps) => {
    let { name, type, defaultValue, children } = prop;
    temp[name] = defaultValue;
  });
}

export { initWidgetDefaulValue };
