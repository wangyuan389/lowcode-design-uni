/*
 * @Description: 获取远程物料schema 1.用于展示物料模板列表 2.渲染对应物料属性面板
 * @Autor: WangYuan1
 * @Date: 2022-10-19 09:36:12
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 11:45:39
 */
import textSchema from "@/widgets/TextWidget/schema.json";
import WrapWidget from "@/widgets/WrapWidget/schema.json";

import { useDesignStore } from "@/store/design.ts";

function initWidgetSchemas() {
  let schemas = [textSchema, WrapWidget];
  const { setWidgetSchemas } = useDesignStore();

  setWidgetSchemas(schemas);
}

export { initWidgetSchemas };
