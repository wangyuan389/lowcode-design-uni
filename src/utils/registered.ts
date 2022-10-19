/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-18 14:03:01
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-18 14:40:21
 */

// 注册所有控件
function registeredSetters(app: any) {
  const modules: any = import.meta.glob(`../setter/**/*.vue`);

  for (const path in modules) {
    let pathList = path.split("/");
    let name: string = pathList.pop() as string;
    name = name.replace(/(\.vue)/g, "");

    modules[path]().then((module: any) => {
      app.component(name, module.default);
    });
  }
}

export { registeredSetters };
