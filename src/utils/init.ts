/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-18 13:44:57
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 14:05:32
 */
import { registeredSetters } from "./registered";

function initApp(app: any) {
  // 注册所有控件
  registeredSetters(app);
}

export { initApp };
