/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-18 13:44:57
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 09:46:50
 */
import { registeredSetters } from "./registered";
import { initWidgetSchemas } from "./schemas";

function initApp(app: any) {
  // 注册所有控件
  registeredSetters(app);

  // 获取所有远程物料schema
  initWidgetSchemas();
}

export { initApp };
