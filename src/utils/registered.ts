/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-18 14:03:01
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 11:51:54
 */
import { registeredComponents } from "@/hooks/baseuse.ts";

// 注册所有控件
function registeredSetters(app: any) {
  registeredComponents(app, "../setter/**/*.vue");
}

export { registeredSetters };
