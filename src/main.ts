/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-12 20:57:05
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 14:02:39
 */
import App from "./App.vue";
import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import "./style/index.scss";

// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { initApp } from "@/utils/init";

export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(ElementPlus);
  
  initApp(app);

  return {
    app,
  };
}
