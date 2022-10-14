/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-12 20:57:05
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 10:33:33
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./style/index.scss";

export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());

  return {
    app,
  };
}
